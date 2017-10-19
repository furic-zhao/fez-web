import temp from './index.hbs';
// Home
var homeAnimate = function() {
  if ($('#fez-home').length > 0) {

    $('#fez-home').waypoint(function(direction) {

      if (direction === 'down' && !$(this.element).hasClass('animated')) {


        setTimeout(function() {
          $('#fez-home .to-animate').each(function(k) {
            var el = $(this);

            setTimeout(function() {
              el.addClass('fadeInUp animated');
            }, k * 200, 'easeInOutExpo');

          });
        }, 200);


        $(this.element).addClass('animated');

      }
    }, { offset: '80%' });

  }
};

export default () => {
  $("#fez-home").html(temp());
  homeAnimate();


  // var ww = window.innerWidth,
  //     wh = window.innerHeight;
  var ww = document.getElementById("fez-home").clientWidth,
    wh = document.getElementById("fez-home").clientHeight;
  // console.log(document.getElementById("fez-home").clientWidth);
  var curve;
  var lengthTube = 600;
  var detailTube = 200;
  var radius = 6;
  var logoDist = 10;

  var renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("canvas"),
    antialias: true
  });
  renderer.setSize(ww, wh);

  var scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 50, 150);
  var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.0001, 100000);

  /* ==================== */
  /* ===== ON RESIZE ==== */
  /* ==================== */
  window.addEventListener("resize", function() {
    ww = document.getElementById("fez-home").clientWidth;
    wh = document.getElementById("fez-home").clientHeight;
    camera.aspect = ww / wh;
    camera.updateProjectionMatrix();
    renderer.setSize(ww, wh);
  });

  /* ==================== */
  /* == MOUSE POSITION == */
  /* ==================== */
  var mouse = new THREE.Vector3(0, 0, 0);
  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onMouseMove);
  var mouseVector = new THREE.Vector3();

  function onMouseMove(e) {
    var x = 0;
    var y = 0;
    if (e.type === "touchmove") {
      x = e.touches[0].clientX;
      y = e.touches[0].clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }
    mouseVector.set((x / ww) * 2 - 1, -(y / wh) * 2 + 1, 0.5);
    mouseVector.unproject(camera);
    var dir = mouseVector.sub(camera.position).normalize();
    var distance = Math.abs(lengthTube + logoDist) - Math.abs(camera.position.z);
    mouse = camera.position.clone().add(dir.multiplyScalar(distance));
  }

  /* ==================== */
  /* === Wishes Text ==== */
  /* ==================== */
  var wishes = new THREE.Object3D();
  scene.add(wishes);

  function addCopy() {
    var geometry = new THREE.PlaneGeometry(radius, 0.25 * radius);
    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("./static/images/index/three-video/copy00.png"),
      transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.copy(curve.getPointAt(.2));
    plane.position.x += 0.05;
    plane.position.y += 0.25;
    wishes.add(plane);

    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("./static/images/index/three-video/copy01.png"),
      transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.copy(curve.getPointAt(.4));
    wishes.add(plane);

    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("./static/images/index/three-video/copy02.png"),
      transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.copy(curve.getPointAt(.6));
    wishes.add(plane);

    var material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("./static/images/index/three-video/copy03.png"),
      transparent: true
    });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.copy(curve.getPointAt(.8));
    wishes.add(plane);
  }

  /* ====================== */
  /* === Path creation ==== */
  /* ====================== */
  var particles = new THREE.Object3D();
  var particlesLogo = new THREE.Object3D();
  scene.add(particles);
  scene.add(particlesLogo);
  noise.seed(0.05);

  function createTube() {
    //Create the 'tube'
    var points = [];
    for (var i = 0; i < detailTube; i++) {
      var x = noise.simplex2(i * 0.01, 0.01) * 50;
      // var x = 0;
      var y = noise.simplex2(i * 0.01, 0.01) * 50;
      var y = 0;
      var z = -(i / detailTube) * lengthTube;
      points.push(new THREE.Vector3(x, y, z));
    }
    curve = new THREE.CatmullRomCurve3(points);

    //Create the particles
    var geom = new THREE.Geometry();
    var geomLogo = new THREE.Geometry();
    var frames = curve.computeFrenetFrames(detailTube, true);
    var endPoint = curve.getPointAt(1);
    for (var i = 0; i < detailTube; i++) {
      var N = frames.normals[i];
      var B = frames.binormals[i];
      for (var j = 0; j < 80; j++) {
        var index = (i / detailTube) + (Math.random() - 0.5) * 0.01;
        index = Math.max(0, Math.min(index, 1));
        var p = curve.getPointAt(index);
        var position = p.clone();
        var angleRotate = Math.random() * Math.PI * 2;
        var sin = Math.sin(angleRotate);
        var cos = -Math.cos(angleRotate);

        var normal = new THREE.Vector3();
        normal.x = (cos * N.x + sin * B.x);
        normal.y = (cos * N.y + sin * B.y);
        normal.z = (cos * N.z + sin * B.z);
        normal.normalize();

        position.x = p.x + radius * normal.x;
        position.y = p.y + radius * normal.y;
        position.z = p.z + radius * normal.z;
        position.vx = 0;
        position.vy = 0;
        position.vz = 0;
        position.accX = 0;
        position.accY = 0;
        position.accZ = 0;
        position.speed = Math.random() + 0.2;
        position.friction = Math.random() * 0.04 + 0.95;
        position.frictionZ = Math.random() * 0.04 + 0.90;
        if (j < 20) {
          var destDot = logoParticles[Math.floor(logoParticles.length * Math.random())].clone();
          destDot.x += endPoint.x;
          destDot.y += endPoint.y;
          var angle = destDot.angleTo(endPoint);
          destDot.applyAxisAngle(destDot.clone().normalize(), angle * 10);
          position.dest = destDot;
          TweenMax.to(position, Math.random() * 8 + 5, {
            x: (Math.random() > 0.5) ? "+" : "-" + "=" + Math.random() * 2,
            y: (Math.random() > 0.5) ? "+" : "-" + "=" + Math.random() * 2,
            z: (Math.random() > 0.5) ? "+" : "-" + "=" + Math.random() * 2,
            ease: Power2.easeOut,
            delay: -Math.random() * 13,
            repeat: -1,
            yoyo: true
          });
          geomLogo.vertices.push(position);
        } else {
          position.dest = new THREE.Vector3(position.x, position.y, position.z);
          geom.vertices.push(position);
        }
      }
    }
    var mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.01,
      sizeAttenuation: true
    });
    var dots = new THREE.Points(geom, mat);
    particles.add(dots);
    var mat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.2,
      opacity: 1,
      transparent: true,
      map: new THREE.TextureLoader().load("./static/images/index/three-video/dotTexture.png"),
      sizeAttenuation: true
    });
    var dotsLogo = new THREE.Points(geomLogo, mat);
    particlesLogo.add(dotsLogo);

  }

  var showLogo = false;


  var logoImage = new Image();
  logoImage.crossOrigin = "";
  logoImage.onload = getDataLogo;
  logoImage.src = "./static/images/fez-logo.png"
  var logoParticles = [];

  var logoW = 330;
  var logoH = 150;

  function getDataLogo() {
    var canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");
    canvas.width = logoW;
    canvas.height = logoH;

    ctx.drawImage(logoImage, 0, 0, logoW, logoH);

    var data = ctx.getImageData(0, 0, logoW, logoH).data;

    for (var i = 0; i < logoW; i += 2) {
      for (var j = 0; j < logoH; j += 2) {
        if (data[((i + j * logoW) * 4) + 3] > logoH) {
          var pixel = new THREE.Vector3(i - 165, -j + 240, 1).multiplyScalar(radius * 0.003);
          pixel.z = -lengthTube - logoDist;
          logoParticles.push(pixel);
        }
      }
    }

    createTube();
    addCopy();

    requestAnimationFrame(render);
    introTl.play();
  }

  var interval = 0.0005;
  var progress = {
    z: 0
  };

  function render(a) {
    requestAnimationFrame(render);
    var tempProgress = progress.z;
    var p1 = curve.getPointAt(tempProgress);
    var p2 = curve.getPointAt(tempProgress + interval);
    camera.position.set(p1.x, p1.y, p1.z);
    camera.lookAt(p2);

    var par = "";
    if (showLogo) {
      for (var i = 0; i < particlesLogo.children[0].geometry.vertices.length; i++) {
        par = particlesLogo.children[0].geometry.vertices[i];
        par.accX = (par.dest.x - par.x) * 0.003 * par.speed;
        par.accY = (par.dest.y - par.y) * 0.003 * par.speed;
        par.accZ = (par.dest.z - par.z) * 0.005 * par.speed;
        par.vx += par.accX;
        par.vy += par.accY;
        par.vz += par.accZ;
        par.vx *= par.friction;
        par.vy *= par.friction;
        par.vz *= par.frictionZ;

        par.x += par.vx;
        par.y += par.vy;
        par.z += par.vz;

        var distance = mouse.distanceTo(par);
        if (distance < 0.8) {
          par.accX = (par.x - mouse.x) / 70;
          par.accY = (par.y - mouse.y) / 70;
          par.vx += par.accX;
          par.vy += par.accY;
        }

      }
    }

    if (!showLogo && tempProgress > 0.85) {
      showLogo = true;
    }

    for (var i = 0; i < wishes.children; i++) {
      wishes.children[i].lookAt(camera.position);
    }

    particlesLogo.children[0].geometry.verticesNeedUpdate = true;

    renderer.render(scene, camera);

  }

  /* INTRO ANIMATION */
  var introTl = new TimelineMax({ paused: true, delay: 0.5 });
  introTl.to("body", 0.3, {
    opacity: 1
  });
  introTl.from(".intro strong", 0.8, {
    opacity: 0,
    y: "-30%",
    ease: Power1.easeOut
  });
  introTl.staggerFrom(".intro p", 0.8, {
    opacity: 0,
    y: "-30%",
    ease: Power1.easeOut
  }, 0.4);
  introTl.from(".intro .start", 0.8, {
    opacity: 0,
    ease: Power1.easeOut
  });

  var animTl = new TimelineMax({
    paused: true,
    repeat: 0
  });
  // animTl.timeScale(5);
  animTl.set(".intro", {
    "pointer-events": "none"
  });
  animTl.staggerTo([".intro strong", ".intro .copy", ".intro .start"], 0.3, {
    opacity: 0,
    y: "-50%",
    ease: Power1.easeIn
  }, 0.1);
  animTl.to("canvas", 0.5, {
    opacity: 1,
    ease: Power2.easeIn
  }, "-=0.5");
  animTl.to(progress, 2, {
    z: 0.1,
    ease: Power3.easeIn
  });
  animTl.to(progress, 4, {
    z: 0.28,
    ease: SlowMo.ease.config(0.2, 0.7, false)
  });
  animTl.to(progress, 4, {
    z: 0.48,
    ease: SlowMo.ease.config(0.2, 0.7, false)
  });
  animTl.to(progress, 4, {
    z: 0.68,
    ease: SlowMo.ease.config(0.2, 0.7, false)
  });
  animTl.to(progress, 4, {
    z: 0.88,
    ease: SlowMo.ease.config(0.2, 0.7, false)
  });
  animTl.to(progress, 2, {
    z: 0.988,
    ease: Power3.easeOut
  });
  animTl.to("canvas", 1, {
    opacity: 0.5,
    ease: Power2.easeIn
  });
  animTl.set(".outro", {
    "pointer-events": "auto"
  });
  animTl.from(".outro strong", 0.8, {
    opacity: 0,
    y: "-30%",
    ease: Power1.easeOut
  }, "+=1");
  animTl.staggerFrom(".outro .copy p", 0.8, {
    opacity: 0,
    y: "-50%",
    ease: Power1.easeOut
  }, 0.4);

  document.querySelector(".start").addEventListener("click", function() {
    if (ww < 900) {
      toggleFullScreen();
    }
    for (var i = 0; i < particlesLogo.children[0].geometry.vertices.length; i++) {
      var par = particlesLogo.children[0].geometry.vertices[i];
      TweenMax.killTweensOf(par);
    }
    animTl.play();
  });

  function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }
}
