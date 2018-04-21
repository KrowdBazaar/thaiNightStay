var sales_report_link = '';
$(function(){
google.script.run.withSuccessHandler(function(e){
  var ef = JSON.parse(e);
  var data = ef["data"];
  var attribute_ids = ef["attribute_id"];
  var attribute_names = ef["attribute_name"];
  sales_report_link = ef["script_link"];
  console.log(data.length);
  console.log(data);
  for(var i=0;i<data.length;++i){ // iterate row by row and examine data in column A
     var htmlText = '<div class="panel panel-default"><div class="panel-heading"><h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapse'+(i+1)+'">'+(i+1)+') '+ data[i][1] + ' &emsp; <img src="'+data[i][10]+'" style="max-width:230px;max-height:95px;width: auto;height: auto;"/></a></h4></div>';
     htmlText = htmlText + '<div id="collapse'+(i+1)+'" class="panel-collapse collapse in"><div class="panel-body"><table class="table" style="border-radius: 25px;border: 2px solid #73AD21;padding: 20px;"><thead><tr><th class="rotate" scope="col">Property</th><th class="rotate" scope="col">Value</th></tr></thead>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Web Category (หมวดหมู่)</th><td>'+data[i][11]+'</td></tr>';
     htmlText = htmlText + '<tbody><tr><th class="rotate" scope="row">ID (รหัสสินค้า)</th><td><a href="'+data[i][14]+'"  target="_blank">'+data[i][0]+'</a></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Name (ชื่อสินค้า)</th><td><input class="form-control" type="text" name="name-'+data[i][0]+'" id="name-'+data[i][0]+'" placeholder="Name" required="required" value="'+data[i][1]+'" onchange="KBazaar_OnEdit(\'name-'+data[i][0]+'\',\'name\','+data[i][0]+');"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Quantity (จำนวนในสต๊อค)</th><td><input class="form-control" type="number" min="1" name="quantity-'+data[i][0]+'" id="quantity-'+data[i][0]+'" placeholder="Quantity" required="required" value="'+data[i][2]+'" onchange="KBazaar_OnEdit(\'quantity-'+data[i][0]+'\',\'quantity\','+data[i][0]+')"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Price (ราคาขาย)</th><td><input class="form-control" type="number" min="1" name="price-'+data[i][0]+'" id="price-'+data[i][0]+'" placeholder="Price" required="required" value="'+data[i][3]+'" onchange="KBazaar_OnEdit(\'price-'+data[i][0]+'\',\'price\','+data[i][0]+')"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Compare To Price (ราคาเปรียบเทียบ)</th><td><input class="form-control" type="number" min="1" name="compareToPrice-'+data[i][0]+'" id="compareToPrice-'+data[i][0]+'" placeholder="Compare To Price" required="required" value="'+data[i][4]+'" onchange="KBazaar_OnEdit(\'compareToPrice-'+data[i][0]+'\',\'compareToPrice\','+data[i][0]+')"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">SEO Title (หัวข้อ SEO)</th><td><input class="form-control" type="text" name="seoTitle-'+data[i][0]+'" id="seoTitle-'+data[i][0]+'" placeholder="SEO Title" required="required" value="'+data[i][5]+'" onchange="KBazaar_OnEdit(\'seoTitle-'+data[i][0]+'\',\'seoTitle\','+data[i][0]+')"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">SEO Description (คำอธิบาย Metatag SEO)</th><td><input class="form-control" type="text" name="seoDescription-'+data[i][0]+'" id="seoDescription-'+data[i][0]+'" placeholder="SEO Description" required="required" value="'+data[i][6]+'" onchange="KBazaar_OnEdit(\'seoDescription-'+data[i][0]+'\',\'seoDescription\','+data[i][0]+')"/></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Description (คำอธิบายสินค้า)</th><td><textarea name="Description-'+data[i][0]+'" style="width: 100%;" id="Description-'+data[i][0]+'" value="'+data[i][7]+'"></textarea><button class="button" onclick="KBazaar_DescriptionEdit(\'Description-'+data[i][0]+'\',\'Description\','+data[i][0]+')">Save Description</button></td></tr>';
     var selectOption = '<select class="form-control form-control-select2" name="isShippingRequired-'+data[i][0]+'" id="isShippingRequired-'+data[i][0]+'" placeholder="isShippingRequired"  required="required" onchange="KBazaar_OnEdit(\'isShippingRequired-'+data[i][0]+'\',\'isShippingRequired\','+data[i][0]+')">';
     selectOption = selectOption + '<option value="FALSE" selected>FALSE</option>';
     selectOption = selectOption + '<option value="TRUE" >TRUE</option>';
     selectOption = selectOption + '</select>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">IsShippingRequired (สินค้าต้องถูกนำส่ง? TRUE = ต้องการ,FALSE = ไม่ต้องการ)</th><td>'+selectOption+'</td></tr>';
     var selectOption = '<select class="form-control form-control-select2" name="enabled-'+data[i][0]+'" id="enabled-'+data[i][0]+'" placeholder="enabled"  required="required" onchange="KBazaar_OnEdit(\'enabled-'+data[i][0]+'\',\'enabled\','+data[i][0]+')">';
     selectOption = selectOption + '<option value="FALSE" selected>FALSE</option>';
     selectOption = selectOption + '<option value="TRUE" >TRUE</option>';
     selectOption = selectOption + '</select>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Enabled (ให้แสดงที่หน้าร้านค้า? TRUE = ต้องการ,FALSE = ไม่ต้องการ)</th><td>'+selectOption+'</td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Main Image (รูปภาพหลักของสินค้า)</th><td><a href="'+data[i][12]+'" target="_blank"> Change Main Image</a></td></tr>';
     htmlText = htmlText + '<tr><th class="rotate" scope="row">Gallery Image (รูปภาพ Gallery)</th><td><a href="'+data[i][13]+'" target="_blank"> Add Gallery Image</a></td></tr>';
     htmlText = htmlText + '</tbody></table>';
     htmlText = htmlText + '</tbody></table>';
     for(var j=1;j<attribute_ids.length;++j){
      if(j%3==0)htmlText = htmlText + '<div class="form-row">';
      var paramID = (data[i][14]+'-'+attribute_ids[j-1]);      
      htmlText = htmlText + '<div class="form-group col-md-4"> <label for="'+attribute_names[j-1]+'">'+attribute_names[j-1]+'</label><input type="text" class="form-control" id="'+paramID+'" placeholder="'+attribute_names[j-1]+'" value="'+data[i][15][data[i][16].indexOf(attribute_ids[j-1])]+'" onchange="KBazaar_OnEdit(\''+paramID+'\',\'attribute\','+data[i][0]+');"></div>'; 
      if(j%3==0)htmlText = htmlText + '</div>';
     }
     htmlText = htmlText + '</div></div></div>';
     $("#accordion").append(htmlText);
     CKEDITOR.replace('Description-'+data[i][0]+''); 
     if(data[i][8])$("#isShippingRequired-"+data[i][0]).val("TRUE");
     if(data[i][9])$("#enabled-"+data[i][0]).val("TRUE");
     }
}).getProduct_fromKBazaar();
});
var open_sales_report = function(){
window.open(sales_report_link, '_blank');
};

var KBazaar_OnEdit = function(paramID,param,productId){
 var newValue = $("#"+paramID).val();
 console.log(paramID + " " + newValue);
 google.script.run.withSuccessHandler(function(e){
   alert(param+" property of product id: " + productId + " has been changed to "+ newValue);
}).productCatalog_OnEdit(param,productId,newValue);
};

var KBazaar_DescriptionEdit = function(paramID,param,productId){
 var newValue = CKEDITOR.instances[paramID].getData();
 console.log(paramID + " " + newValue);
 google.script.run.withSuccessHandler(function(e){
   alert(param+" property of product id: " + productId + " has been changed to "+ newValue);
}).productCatalog_OnEdit(param,productId,newValue);
};
