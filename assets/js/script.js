console.log("Script is working.");

$('#flavorModal').on('show.bs.modal', function (event) {

    const flav_name_AlmondEnjoy = "Almond Enjoy";
    const flav_name_BlackWidow = "Black Widow";
    const flav_name_ChocolateCappuccino = "Chocolate Cappuccino";
    const flav_name_ChocolatePeanutButter = "Chocolate Peanut Butter";
    const flav_name_GasLightCinnamon = "Gas Light Cinnamon";

    const flav_desc_AlmondEnjoy = "Dare to enjoy the taste of mouth-watering chocolate, rich and delectable coconut combined with roasted almonds. It's like a candy bar in a bottle, with just the right balance of everything.";
    const flav_desc_BlackWidow = "It has a spicy herbal flavor with a slight smokiness. A nose of cloves, cinnamon and ginger with hints of allspice. At 107 proof, Black Widow is one powerful drink.";
    const flav_desc_ChocolateCappuccino = "Chocolate Cappuccino provides a balanced blend of delicate coffee, light cinnamon and aromatic cocoa to create an enticing, robust flavor.";
    const flav_desc_ChocolatePeanutButter = "Sinfully decadent chocolate blended with savory peanut butter. What an amazing combination!";
    const flav_desc_GasLightCinnamon = "It is wonderfully fascinating and reminiscent of the warm sun on your face as a cool breeze carries the scent of a West Indies spice market.";

    let button = $(event.relatedTarget) // Button that triggered the modal
    let flavor = button.data('flavor') // Extract info from data-* attributes
    let flavorName = "";
    let flavorDescription = "";
    let proof = "70 Proof";


    switch (flavor) {
        case "cappuccino":
            console.log("Flavor is Cappuccino.");
            flavorName = flav_name_ChocolateCappuccino;
            flavorDesc = flav_desc_ChocolateCappuccino;
            break;
        case "chocpeanut":
            console.log("Flavor is Chocolate Peanut Butter.");
            flavorName = flav_name_ChocolatePeanutButter;
            flavorDesc = flav_desc_ChocolatePeanutButter;
            break;
        case "almond":
            console.log("Flavor is Almond Enjoy.");
            flavorName = flav_name_AlmondEnjoy;
            flavorDesc = flav_desc_AlmondEnjoy;
            break;
        case "blackwidow":
            console.log("Flavor is Black Widow.");
            flavorName = flav_name_BlackWidow;
            flavorDesc = flav_desc_BlackWidow;
            proof = "107 Proof";
            break;
        case "cinnamon":
            console.log("Flavor is Gas Light Cinnamon.");
            flavorName = flav_name_GasLightCinnamon;
            flavorDesc = flav_desc_GasLightCinnamon;
            break;
        
        default:
            break;
    }
    
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('#flavor-name').text(flavorName);
    modal.find('#flavor-proof').text(proof);
    modal.find('#flavor-desc').text(flavorDesc);
})