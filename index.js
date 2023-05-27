//JavaScript
(function (window, document, undefined) {
  // code that should be taken care of right away

  window.onload = init;

  var family;

  function getFamilyMembers() {
    var familyMembers = [];

    var data = familyData();
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(data, "text/xml");
    var nodes = xmlDoc.getElementsByTagName("node");
    console.log(xmlDoc);
    for (i = 0; i < nodes.length; i++) {
      familyMembers.push({
        id: nodes[i].getAttribute("id"),
        pids: nodes[i].getAttribute("pids"),
        mid: nodes[i].getAttribute("mid"),
        fid: nodes[i].getAttribute("fid"),
        name: nodes[i].getAttribute("name"),
        gender: nodes[i].getAttribute("gender"),
      });
    }
    return familyMembers;
  }

  function init() {
    family = new FamilyTree(document.getElementById("tree"), {
      menu: {
        xml: { text: "Export XML" },
        importXML: {
          text: "Import XML",
          icon: FamilyTree.icon.xml(24, 24, "red"),
          onClick: importXMLHandler,
        },
      },
      miniMap: true,
      nodeTreeMenu: true,
      mouseScrool: FamilyTree.action.none,
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });
    family.loadXML(familyData());
  }

  function importXMLHandler() {
    family.importXML();
  }
})(window, document, undefined);
