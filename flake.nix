{
  description = "Python Computer Vision and OCR development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      utils,
    }:
    utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        python = pkgs.python3;

        # System dependencies required for the libraries to run
        buildDeps = with pkgs; [
          tesseract # Required by pytesseract
          libGL # Required by opencv-python
          glib # Common dependency for CV2
          zlib # Common dependency for Pillow
        ];
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs =
            buildDeps
            ++ (with pkgs.python3Packages; [
              # Python packages from Nixpkgs (more stable in Nix)
              opencv4
              pytesseract
              pillow
              numpy
              flake8
            ]);

          shellHook = ''
            echo "--- CV/OCR Dev Environment Loaded ---"
            echo "Python version: $(python --version)"
            echo "Tesseract version: $(tesseract --version | head -n 1)"

            # This ensures OpenCV can find necessary libraries on Linux
            export LD_LIBRARY_PATH="${pkgs.lib.makeLibraryPath buildDeps}:$LD_LIBRARY_PATH"
          '';
        };
      }
    );
}
