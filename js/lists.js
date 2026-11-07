let trees = [
    { name: "Baobab", height: 25, image: "https://images.takeshape.io/86ce9525-f5f2-4e97-81ba-54e8ce933da7/dev/f181815c-e8c4-4619-858b-dfc70a26338d/100-Adansonia_grandidieri-CC-Bernard%20Gagnon-2007.jpg" },
    { name: "Norfolk Island Pine", height: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK2V9zMRswTeyj1S20KvPBxzsACZ4mFEMCPokLgkTOA7DDV8aFF5A7jxHlPkVAJH_qdmUD2QCNM8NEWYgd48Qt3F0RvsMcvVvleQFwJ0w&s=10" },
    { name: "Dragon Blood Tree", height: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvAVtofbSSdXUUmJ_pOMGEv6oIWJLCTtn83GVCY4CBdDaAvfOte3WwktyV2LNApCrWUXy9EkNEs-yGRxD9Nt5j9RFtVjmsCkby_wRfkA&s=10" },
    { name: "Bristlecone Pine", height: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTioCQVmOf3ICynHxFkiUe0l4SqRg1t8Q2BWQuz_8H73Q-KoOZ0-nu5DkS6t03w2hSnxWPqCmYWe8v5vxjwm-XiE_xrciox3fq3DFpRpk&s=10" },
    { name: "Weeping Willow", height: 20, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_9aMP6lD733nUtFjA_mgEteH00hNYH4L034Al0OqCnxtnarTy7Dk7RDjnkE15KvvR2Psdn3wrH2l1LXn-fd_H2lbP7Bsjpl_5QQuLAog&s=10" }
];


let treeList = document.getElementById("tree-list");
let sortSelect = document.getElementById("sort-select");

function sortTrees() {
treeList.innerHTML = "";

for (let i = 0; i < trees.length; i++) {
    let item = document.createElement("li");

    let image = document.createElement("img");
    image.src = trees[i].image;
    image.alt = trees[i].name;
    image.width = 200;

    let name = document.createElement("p");
    name.textContent = trees[i].name;

    item.appendChild(image);
    item.appendChild(name);

    treeList.appendChild(item);
}
}

sortSelect.addEventListener("change", function() {
    if (sortSelect.value === "name") {
        trees.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
    } else {
        trees.sort(function(a, b) {
            return a.height - b.height;
        });
    }
    sortTrees();
}); 
sortTrees();