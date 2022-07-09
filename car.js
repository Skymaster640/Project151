AFRAME.registerComponent("car",{
    schema: {
        modelRef: {type: "string", default: "carmodel/scene.gltf"}
    },
    init: function(){
        this.el.setAttribute("gltf-model", this.data.modelRef)
        const position = {x:0,y:-1.5,z:-10};
        const rotation = {x:0,y:45,z:0};
        const scale = {x:0.01,y:0.01,z:0.01}
        this.el.setAttribute("position",position)
        this.el.setAttribute("rotation",rotation)
        this.el.setAttribute("scale",scale)
    }
})