var image_dict = {
    'app_edit_cub1':'assets/sap_v3_e91/app_edit/2023-07-22T09-06-24/',
    'app_edit_cub2':'assets/sap_v3_e91/app_edit/2023-07-24T19-59-52/',
    'app_edit_car1':'assets/sap_v3_e91/app_edit/2023-07-22T09-14-05/',
    'app_edit_car2':'assets/sap_v3_e91/app_edit/2023-07-24T20-17-16/',
    'app_edit_sky1':'assets/sap_v3_e91/app_edit/2023-07-22T10-58-26/',
    'app_edit_sky2':'assets/sap_v3_e91/app_edit/2023-07-24T22-45-13/',

    'add_obj_sand1': 'assets/sap_v3_e91/add_obj/2023-07-26T19-35-05/',
    'add_obj_sand2': 'assets/sap_v3_e91/add_obj/2023-07-26T19-46-50/',
    'add_obj_cake1': 'assets/sap_v3_e91/add_obj/2023-07-26T19-50-48/',
    'add_obj_cake2': 'assets/sap_v3_e91/add_obj/2023-07-26T19-52-25/',
    'add_obj_lake1': 'assets/sap_v3_e91/add_obj/2023-07-26T20-08-40/',
    'add_obj_lake2': 'assets/sap_v3_e91/add_obj/2023-07-26T20-04-22/',
}

function showImageInDiv(divId, idx) {
    refimagePath = image_dict[divId + idx] + 'vis_ref.png'
    inpimagePath = image_dict[divId + idx] + 'vis_inp.png'
    editimagePath = image_dict[divId + idx] + 'edit0.png'
    const dynamicImage = document.getElementById(divId + '_ref');
    dynamicImage.src = refimagePath;
    dynamicImage.hidden = false;

    const dynamicImage1 = document.getElementById(divId + '_out');
    dynamicImage1.src = editimagePath;
    dynamicImage1.hidden = false;

    // const dynamicImage2 = document.getElementById(divId + '_inp');
    // dynamicImage2.src = inpimagePath;
    // dynamicImage2.hidden = false;
    

    if (divId ==  'add_obj_lake'){
      if (idx == 1){
        document.getElementById("lake_prompt").innerHTML = "Prompt - A picture of the crystal clear lake with <font color=red>reflections</font>";
      }
      if (idx == 2){
        console.log("Hello, world! IN 2");
        document.getElementById("lake_prompt").innerHTML = "Prompt - A picture of the lake"
      }
    }

    if (divId ==  'add_obj_sand'){
      if (idx == 1){
        document.getElementById("sand_prompt").innerHTML = "Prompt - A picture of sandwich on table";
      }
      if (idx == 2){
        document.getElementById("sand_prompt").innerHTML = "Prompt - A picture of pumpkin on table"
      }
    }
}

function showImageInDivVar(divId, imagePath) {
  const dynamicImage = document.getElementById(divId);
  dynamicImage.src = imagePath;
  dynamicImage.hidden = false;
}
    

function toggleImage(divId) {
    var image1 = document.getElementById(divId);

    if (image1.src.includes("edit")) {
      image1.src = "image2.jpg";
    } else {
      image1.src = "image1.jpg";
    }
  }