import CekResepPresenter from './cek-resep-presenter.js';
import Camera from '../../utils/camera.js';
import { addHistory } from '../../data/database';

export default class CekResepPage {
  async render() {
    const token = localStorage.getItem('accessToken');
    const isLoggedIn = token && token !== 'null' && token !== 'undefined';
    return `
      <style>
        .result-container {
          margin: 30px auto;
          padding: 25px;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          background-color: #ffffff;
          max-width: 1000px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          gap: 30px;
          font-family: 'Roboto', Arial, sans-serif;
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .result-text {
          flex: 1;
          min-width: 0;
        }
        .result-image {
          flex: 0 0 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .result-container h3 {
          margin: 0 0 20px;
          color: #2c3e50;
          font-size: 28px;
          font-weight: 700;
        }
        .result-container p {
          margin: 10px 0;
          color: #34495e;
          font-size: 16px;
          line-height: 1.6;
        }
        .result-container p strong {
          color: #2c3e50;
          font-weight: 600;
        }
        .result-container ul {
          margin: 10px 0;
          padding-left: 25px;
          color: #34495e;
          font-size: 15px;
          line-height: 1.5;
        }
        .result-container li {
          margin-bottom: 8px;
        }
        .result-container img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .result-container a {
          color: #e67e22;
          text-decoration: none;
          font-weight: 500;
        }
        .result-container a:hover {
          text-decoration: underline;
          color: #d35400;
        }
        .result-container.error {
          border-color: #e74c3c;
          background-color: #fff1f0;
          color: #c0392b;
          display: block;
        }
        .result-container.error p {
          color: #c0392b;
        }
        @media (max-width: 768px) {
          .result-container {
            flex-direction: column;
            width: 90%;
            margin-left: auto;
            margin-right: auto;
          }
          .result-image {
            flex: 0 0 auto;
            max-width: 100%;
          }
        }
      </style>

      <!-- Navigation -->
      <nav class="navigation">
        <div class="nav-container">
          <div class="logo">
            <a href="/">
              <img src="/images/logo.png" alt="Foodinary Logo">
            </a>
          </div>
          <div class="hamburger-menu" id="hamburger-menu">
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
            <div class="hamburger-line"></div>
          </div>
          <div class="nav-menu" id="nav-menu">
            <div class="nav-item"><a href="/">Home</a></div>
            <div class="nav-item"><a href="#/recipe">Recipe</a></div>
            <div class="nav-item active"><a href="#/cek-resep">Check Recipe</a></div>
            <div class="nav-item"><a href="#/about">About</a></div>
          </div>
          <div class="nav-buttons" id="nav-buttons">
            ${isLoggedIn
        ? `<a href="#/dashboard" class="btn-primary">Dashboard</a>`
        : `
                <a href="#/login" class="btn-outline">Login</a>
                <a href="#/register" class="btn-primary">Sign Up</a>`
      }
          </div>
        </div>
      </nav>

      <!-- Dietary Preferences Section -->
      <section class="dietary-section">
        <div class="section-container">
          <h2 class="dietary-title">We will provide a recipe based on your photo.</h2>       
          <p class="dietary-title-desc">Please upload a photo of your Indonesian dish to discover the recipe!</p>         
        </div>   
        <div class="recipe-finder-upload-link">
          <a href="/#/recipe">Or direct a link to this page to search your recipe</a>
        </div>
        <div class="upload-section">
            <div id="drop-area">
                <div id="upload-instruction">
                  <i class="fas fa-cloud-upload-alt icon-upload"></i><br />
                  Drag and drop your photo here
                </div>
                <img id="preview-image" src="" alt="Preview Image" height="200" style="margin-top: 40px; display: none; object-fit: contain; border: 1px solid #ddd;" />
                <video id="camera" width="320" height="200" autoplay muted style="margin-top: 40px; display: none; object-fit: contain; border: 1px solid #ddd;" hidden></video>
            </div>
            <input 
              type="file" 
              id="file-upload" 
              accept="image/*" 
              class="hidden-input"
            />
            <div class="upload-btn-group">
              <button 
                class="btn-primary"                    
                id="upload-btn"
              >
                Upload
              </button>
              <button 
                class="btn-primary custom-btn-outline"
                id="camera-btn"
              >
                Camera
              </button>
              <button
                class="btn-primary custom-btn-outline"
                id="stop-camera-btn"
                hidden
              >
                Stop
              </button>
              <button 
                class="btn-primary"                    
                id="analyze-btn"
                hidden
              >
                Analyze
              </button>
              <button 
                class="btn-primary custom-btn-outline"
                id="clear-btn"
                hidden
              >
                Clear
              </button>
            </div>
            <div id="selected-file-name" class="selected-file-name"></div>
            <div id="result-container" class="result-container" style="display: none;"></div>
            <canvas id="camera-canvas" width="320" height="200" class="camera-canvas" hidden></canvas>
            <button 
              id="capture-btn"
              class="btn-primary"            
              hidden
            >
              Ambil Foto
            </button>
        </div>        
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-main">
            <div class="footer-brand">              
              <h2>Foodinary - Discover the taste of Indonesia</h2>                        
            </div><br><br><br>
            <div class="footer-social">
              <a href="https://github.com/foodinary-project" class="social-link"><i class="fab fa-github"></i></a>          
            </div>
          </div>
          <div class="footer-menu">
            <div class="footer-column">
              <h4>Popular Recipe</h4>
              <div class="footer-links">                
                <a href="/#/tempe-mendoan" class="footer-link">Rendang Daging <span class="badge-hot">Hot</span></a>
                <a href="/#/rawon" class="footer-link">Nasi Goreng</a>
                <a href="/#/sate" class="footer-link">Bakso</a>
              </div>
            </div>
            <div class="footer-column">
              <h4>Challenge</h4>
              <div class="footer-links">                
                <a href="/#/90-days-cooking" class="footer-link">90 Days of Cooking <span class="badge-hot">New</span></a>                
              </div>
            </div>
            <div class="footer-column">
              <h4>Contact</h4>
              <div class="footer-links">
                <a href="mailto:foodinary.project@gmail.com" class="footer-link">foodinary.project@gmail.com</a>                
                <p class="footer-address">Indonesia</p>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>© 2025 Foodinary. All rights reserved.</p>
            <div class="footer-legal">
              <a href="/#/privacy" class="legal-link">Privacy Policy</a>
              <a href="/#/terms" class="legal-link">Terms of Service</a>
              <a href="/#/about" class="legal-link">About Foodinary</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  async afterRender() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.getElementById('nav-buttons');

    if (hamburgerMenu) {
      hamburgerMenu.addEventListener('click', (event) => {
        event.stopPropagation();
        navMenu.classList.toggle('active');
        navButtons.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
      });

      document.addEventListener('click', (event) => {
        const isClickInsideNav = event.target.closest('.nav-container');
        if (!isClickInsideNav && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navButtons.classList.remove('active');
          hamburgerMenu.classList.remove('active');
        }
      });

      setTimeout(() => {
        const navLinks = document.querySelectorAll('.nav-item a');
        navLinks.forEach(link => {
          link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navButtons.classList.remove('active');
            hamburgerMenu.classList.remove('active');
          });
        });
      }, 100);
    }

    const fileInput = document.getElementById("file-upload");
    const uploadBtn = document.getElementById("upload-btn");
    const cameraBtn = document.getElementById("camera-btn");
    const stopCameraBtn = document.getElementById("stop-camera-btn");
    const analyzeBtn = document.getElementById("analyze-btn");
    const clearBtn = document.getElementById("clear-btn");
    const selectedFileName = document.getElementById("selected-file-name");
    const cameraStream = document.getElementById("camera");
    const cameraCanvas = document.getElementById("camera-canvas");
    const captureBtn = document.getElementById("capture-btn");
    const previewImage = document.getElementById("preview-image");
    const uploadInstruction = document.getElementById("upload-instruction");
    const dropArea = document.getElementById("drop-area");
    const resultContainer = document.getElementById("result-container");

    const camera = new Camera({
      video: cameraStream,
      cameraSelect: document.createElement("select"),
      canvas: cameraCanvas,
    });

    const showUploadInstruction = () => {
      uploadInstruction.style.display = "block";
      previewImage.style.display = "none";
      cameraStream.style.display = "none";
      analyzeBtn.hidden = true;
      clearBtn.hidden = true;
      resultContainer.style.display = "none";
    };

    const hideUploadInstruction = () => {
      uploadInstruction.style.display = "none";
    };

    const openCamera = async () => {
      cameraStream.hidden = false;
      cameraStream.style.display = "block";
      captureBtn.hidden = false;
      cameraCanvas.hidden = true;
      previewImage.style.display = "none";
      selectedFileName.textContent = "";
      analyzeBtn.hidden = true;
      clearBtn.hidden = true;
      resultContainer.style.display = "none";

      stopCameraBtn.hidden = false;
      hideUploadInstruction();

      await camera.launch();
    };

    const capturePhoto = async () => {
      const blob = await camera.takePicture();
      if (!blob) {
        resultContainer.innerHTML = '<p class="error">Failed to capture photo.</p>';
        resultContainer.style.display = "block";
        return;
      }

      camera.stop();
      stopCameraBtn.hidden = true;

      cameraStream.style.display = "none";
      cameraStream.hidden = true;
      captureBtn.hidden = true;
      cameraCanvas.hidden = true;

      const imgURL = URL.createObjectURL(blob);
      previewImage.src = imgURL;
      previewImage.style.display = "block";

      selectedFileName.textContent = "";
      hideUploadInstruction();
      analyzeBtn.hidden = false;
      clearBtn.hidden = false;

      const file = new File([blob], "captured-photo.jpg", {
        type: "image/jpeg",
      });
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;
    };

    const stopCamera = () => {
      camera.stop();
      cameraStream.hidden = true;
      cameraStream.style.display = "none";
      cameraCanvas.hidden = true;
      captureBtn.hidden = true;
      stopCameraBtn.hidden = true;
      analyzeBtn.hidden = true;
      clearBtn.hidden = true;

      previewImage.style.display = "none";
      selectedFileName.textContent = "";
      resultContainer.style.display = "none";
      showUploadInstruction();
    };

    const previewUploadFile = (file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
        cameraStream.style.display = "none";
        hideUploadInstruction();
        analyzeBtn.hidden = false;
        clearBtn.hidden = false;
        resultContainer.style.display = "none";
      };
      reader.readAsDataURL(file);
    };

    const generateUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    const analyzeImage = async () => {
      if (fileInput.files.length === 0) {
        resultContainer.innerHTML = '<p class="error">No image selected for analysis.</p>';
        resultContainer.style.display = "block";
        return;
      }

      const file = fileInput.files[0];

      try {
        analyzeBtn.disabled = true;
        analyzeBtn.textContent = 'Analyzing...';

        const signature = await CekResepPresenter.generateUploadSignature();
        const imageUrl = await CekResepPresenter.uploadToCloudinary(file, signature);
        const { foodName, recipe } = await CekResepPresenter.predictFood(imageUrl);

        // Save to history
        const historyEntry = {
          id: generateUUID(),
          imageUrl,
          foodName,
          recipe,
          timestamp: Date.now(),
        };
        await addHistory(historyEntry);

        resultContainer.innerHTML = `
          <div class="result-text">
            <h3>${foodName}</h3>
            <p><strong>Recipe Name:</strong> ${recipe.name || 'N/A'}</p>
            <p><strong>Dominant Taste:</strong> ${recipe.rasa_dominan || 'N/A'}</p>
            <p><strong>Region:</strong> ${recipe.asal_daerah || 'N/A'}</p>
            <p><strong>Description:</strong> ${recipe.deskripsi || 'No description available'}</p>
            <p><strong>Tools:</strong></p>
            <ul>
              ${recipe.alat?.map(item => `<li>${item || 'N/A'}</li>`).join('') || '<li>No tools listed</li>'}
            </ul>
            <p><strong>Ingredients:</strong></p>
            <ul>
              ${recipe.bahan?.map(item => `<li>${item || 'N/A'}</li>`).join('') || '<li>No ingredients listed</li>'}
            </ul>
            <p><strong>Instructions:</strong></p>
            <ul>
              ${recipe.cara_membuat?.map(item => `<li>${item || 'N/A'}</li>`).join('') || '<li>No instructions listed</li>'}
            </ul>
            <p><strong>Source:</strong> ${recipe.sumber ? `<a href="${recipe.sumber}" target="_blank">View Source</a>` : 'N/A'}</p>
            ${recipe.id ? `<p><a href="#/recipe/${recipe.id}">View Full Recipe</a></p>` : ''}
          </div>
          ${recipe.gambar ? `
            <div class="result-image">
              <img src="${recipe.gambar}" alt="${recipe.name || 'Recipe Image'}">
            </div>
          ` : ''}
        `;
        resultContainer.style.display = "flex";
      } catch (error) {
        resultContainer.innerHTML = `<p class="error">Failed to analyze image: ${error.message}</p>`;
        resultContainer.style.display = "block";
      } finally {
        analyzeBtn.disabled = false;
        analyzeBtn.textContent = 'Analyze';
      }
    };

    clearBtn.addEventListener("click", () => {
      resultContainer.style.display = "none";
      resultContainer.innerHTML = "";
      previewImage.style.display = "none";
      fileInput.value = "";
      analyzeBtn.hidden = true;
      clearBtn.hidden = true;
      showUploadInstruction();
    });

    dropArea.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropArea.style.border = "2px dashed #007bff";
    });

    dropArea.addEventListener("dragleave", () => {
      dropArea.style.border = "1px solid #ddd";
    });

    dropArea.addEventListener("drop", (e) => {
      e.preventDefault();
      dropArea.style.border = "1px solid #ddd";

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        fileInput.files = files;
        selectedFileName.textContent = "";
        previewUploadFile(files[0]);
      } else if (cameraStream.srcObject && cameraStream.style.display !== "none") {
        capturePhoto();
      }
    });

    dropArea.addEventListener("click", () => {
      if (cameraStream.style.display === "none") {
        fileInput.click();
      }
    });

    cameraBtn.addEventListener("click", openCamera);
    captureBtn.addEventListener("click", capturePhoto);
    stopCameraBtn.addEventListener("click", stopCamera);
    analyzeBtn.addEventListener("click", analyzeImage);

    uploadBtn.addEventListener("click", () => {
      fileInput.click();
    });

    fileInput.addEventListener("change", () => {
      if (fileInput.files.length > 0) {
        selectedFileName.textContent = "";
        previewUploadFile(fileInput.files[0]);
      } else {
        selectedFileName.textContent = "";
        previewImage.style.display = "none";
        cameraStream.style.display = "none";
        analyzeBtn.hidden = true;
        clearBtn.hidden = true;
        resultContainer.style.display = "none";
        showUploadInstruction();
      }
    });
  }
}