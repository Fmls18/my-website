let isSecretVisible = false;
const secretLayer = document.getElementById("layer-secret");


document.addEventListener("mousemove", (e) => {
    const sensitivity = 0.05;
    const container = document.querySelector('.parallax-container');
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width/2;
    const centerY = rect.top + rect.height/2;

    document.querySelectorAll('.layer').forEach(layer => {
        if (layer === secretLayer && !isSecretVisible) {
            layer.style.transform = `translate(-50%, -50%)`;
            return;
        }

        const speed = parseFloat(layer.dataset.speed);
        const offsetX = (e.clientX - centerX) * speed * sensitivity;
        const offsetY = (e.clientY - centerY) * speed * sensitivity;
        
        layer.style.transform = `translate(-50%, -50%) 
                               translate(${offsetX}px, ${offsetY}px) 
                               scale(${1 + speed*0.01})`;
    });
});


document.addEventListener("click", (event) => {
    if (window.scrollY < window.innerHeight) {
        isSecretVisible = !isSecretVisible;
        secretLayer.style.opacity = isSecretVisible ? "1" : "0";
        secretLayer.style.pointerEvents = isSecretVisible ? "auto" : "none";
        
        const fakeEvent = new MouseEvent('mousemove', {
            clientX: event.clientX,
            clientY: event.clientY
        });
        document.dispatchEvent(fakeEvent);
    }
});


setTimeout(() => {
    const hint = document.querySelector('.scroll-hint');
    if (hint && window.scrollY < 10) {
        hint.style.opacity = '1';
    }
}, 2000);

document.querySelector('.parallax-container').addEventListener('wheel', (e) => {
 
  }, { passive: true });
  
 
document.querySelector('.parallax-container').addEventListener('wheel', (e) => {
e.stopPropagation();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlayImage").style.display = "none";
  });
  const trigger = document.getElementById("triggerImage");
  const overlay = document.getElementById("overlayImage");
  const page3 = document.getElementById("page3");

  // display picture
  trigger.onclick = function () {
    overlay.style.display = "block";
  }

 
  overlay.onclick = function () {
    overlay.style.display = "none";
  }

  window.addEventListener('scroll', function () {
    const rect = page3.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inView) {
      overlay.style.display = "none";
    }
  });
  window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("overlayImage2").style.display = "none";
    document.getElementById("overlayImage3").style.display = "none";
  });
  // PAGE 3
  const trigger2 = document.getElementById("triggerImage2");
  const overlay2 = document.getElementById("overlayImage2");
  trigger2.onclick = () => overlay2.style.display = "block";
  overlay2.onclick = () => overlay2.style.display = "none";

  // PAGE 4
  const trigger3 = document.getElementById("triggerImage3");
  const overlay3 = document.getElementById("overlayImage3");
  trigger3.onclick = () => overlay3.style.display = "block";
  overlay3.onclick = () => overlay3.style.display = "none";

  const imageColumn = document.querySelector('.image-column');
  let scrollTimeout;

  imageColumn.addEventListener('scroll', () => {
    imageColumn.classList.add('show-scrollbar');

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      imageColumn.classList.remove('show-scrollbar');
    }, 1500); 
  });

  document.querySelectorAll('.image-column').forEach(column => {
    let timeout;
    column.addEventListener('scroll', () => {
      column.classList.add('show-scrollbar');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        column.classList.remove('show-scrollbar');
      }, 1500);
    });
  });




