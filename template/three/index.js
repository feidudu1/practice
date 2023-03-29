
const loader = new THREE.GLTFLoader()


loader.load('http://localhost:3000/pao.gltf', function (gltf) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 1000 );
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0xcccccc, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
  // three.js 的色彩空间渲染方式  【重要】
  renderer.outputEncoding = THREE.sRGBEncoding;
  // 这个不知道干嘛用的 反正我加上了
  renderer.textureEncoding = THREE.sRGBEncoding;
  renderer.setSize( window.innerWidth, window.innerHeight );
  // renderer.shadowMap.enabled = true
  // renderer.hadowMapEnabled = true

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.minDistance = 2;
  controls.maxDistance = 8;
  // controls.minDistance = 200;
  // controls.maxDistance = 800;
  // controls.autoRotate = true;
  // controls.autoRotateSpeed = 0.7;
  // controls.autoRotateSpeed = 1.7;
  

  function addLights(level) {
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    var light = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI);
    light.position.set(0, 50, 0);
    scene.add(light);
  }
  addLights();

  // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // const cube = new THREE.Mesh( geometry, material );
  // scene.add( cube );

  const axesHelper = new THREE.AxesHelper( 15 );
  scene.add( axesHelper );

  // console.log(111, gltf)
  // gltf.scene.castShadow = true
  // console.log(222, gltf.scenes[0].getCenter(new THREE.Vector3()))
  var gltfCenter

  const getCenterPosition = (object) => {
    let p;
    if (object.isMesh) {
      object.geometry.computeBoundingBox();
      p = object.geometry.boundingBox.getCenter(new THREE.Vector3()); //.multiplyScalar(1) //加上这个表示放大了几倍 1为放大倍数
    } else {
      p = new THREE.Box3()
        .setFromObject(object)
        .getCenter(new THREE.Vector3());
    }
    return p;
  };

  gltf.scene.traverse( function ( mesh ) {
    if ( mesh.isMesh ) {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      // gltfCenter = mesh.geometry.center() // keypoint: 有这个会两部分分离
      // mesh.material.emissive =  mesh.material.color;
      // mesh.material.emissiveMap = mesh.material.map ;
      mesh.material = new THREE.MeshPhongMaterial( { color: mesh.material.color } );
      // mesh.material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
    }
  } );

  // var pmremGenerator = new THREE.PMREMGenerator(renderer);
  //         pmremGenerator.compileEquirectangularShader();

  // let clock = new THREE.Clock();
  console.log(555, gltf)
  const scaleNum = 20
  gltf.scene.scale.set(scaleNum, scaleNum, scaleNum)
  const paoGun = gltf.scene.children[0].children[0]
  let center = getCenterPosition(gltf.scene)
  gltf.scene.position.set(-center.x, -center.y, -center.z)
  scene.add(gltf.scene)

  
  // const mixer = new THREE.AnimationMixer( gltf.scene );
  // let animationClip = gltf.animations[0];
  // const clipAction = mixer.clipAction( animationClip ).play();    
  // animationClip = clipAction.getClip();

 

  // camera.position.z = 3;
  // camera.lookAt(0, 0, 3)

  camera.position.set(0, 0, -1);
  camera.lookAt(scene.position);
  document.body.appendChild( renderer.domElement );

  let paoPos = getCenterPosition(paoGun)
  const animatePos = {x:  - center.x, y:  - center.y, z:  - center.z}
  console.log(777, animatePos)
  const tween = new TWEEN.Tween(animatePos)
    .to({x: paoPos.x+ center.x, y: paoPos.y+ center.y, z: paoPos.z+ center.z}, 3000)
    .easing(TWEEN.Easing.Elastic.InOut)
    .onUpdate(update)
  function update() {
    paoGun.position.set(animatePos.x, animatePos.y, animatePos.z)
  }
  tween.start()

  animate();

  function animate(time) {
    animateId = requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    tween.update(time)
    // const delta = clock.getDelta()
    // if (mixer && clipAction) {
    //   mixer.update(delta)
    // }
  }
  
}, undefined, function (err) {
  console.error(err)
})

