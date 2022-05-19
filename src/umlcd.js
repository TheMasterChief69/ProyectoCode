var graph = new joint.dia.Graph();

new joint.dia.Paper({
    el: document.getElementById('paper'),
    width: 1920,
    height: 405,
    gridSize: 10,
    drawGrid: true,

    background: {
        color: 'rgba(255, 255, 255, 0.5)'
    },
    model: graph
});


var uml = joint.shapes.uml;
var classes;

function crearNuevo(nom, atributos, metodo) {
    const x = Math.random() * 330
    const y = Math.random() * 220
    const rect = new uml.Class({
        position: { x: x, y: y },
        size: { width: 250, height: 150 },
        name: nom,
        attributes: atributos,
        methods: metodo,
        attrs: {
            '.uml-class-name-rect': {
                fill: '#feb662',
                stroke: '#ffffff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#fdc886',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#fdc886',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-text': {
                ref: '.uml-class-attrs-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            },
            '.uml-class-methods-text': {
                ref: '.uml-class-methods-rect',
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        }
    })
    rect.addTo(this.graph)
    return rect
};

function nuevaRelacion(origen, destino) {
    const link = new uml.Generalization({ source: { origen }, target: { destino } })
    link.addTo(this.graph)
};
