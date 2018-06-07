  var product_view_link = '';
      $(function(){
        google.script.run.withSuccessHandler(function(e){
          var ef = JSON.parse(JSON.stringify(e));
          var data = ef["data"];
          console.log(data);
          product_view_link=ef["script_link"]+"?productCatalog=1";
          for(var i=(data.length-1);i>0;--i){ // iterate row by row and examine data in column A
             var htmlText = '<tr><th class="rotate" scope="row">'+i+'</th>';
             for(var j=0;j<data[i].length;++j){
                 if(j==9){
                   var selectOption = '<select class="form-control form-control-select2" name="pay_status" id="pay_status-'+i+'" placeholder="Payment Status"  required="required" onchange="change_payment_status('+i+','+data[i][1]+')">';
                   selectOption = selectOption + '<option value="AWAITING_PAYMENT" selected>Awaiting Payment</option>';
                   selectOption = selectOption + '<option value="PAID" >Paid</option>';
                   selectOption = selectOption + '<option value="CANCELLED" >Cancelled</option>';
                   selectOption = selectOption + '<option value="REFUNDED" >Refunded</option>';
                   selectOption = selectOption + '<option value="INCOMPLETE" >Incomplete</option>';
                   selectOption = selectOption + '</select>';
                   htmlText=htmlText+'<td>'+selectOption+'</td>';
                 }else{ 
                     htmlText=htmlText+'<td>'+data[i][j]+'</td>';
                 }
             }
             htmlText = htmlText+'</tr>';
             $("#salesReport").append(htmlText);
             $("#pay_status-"+i).val(data[i][9]);
          }
          $('#KBazaar_SalesTable').DataTable();
        }).getList_of_orders();
      });
      
      var open_product_catalog = function(){
        window.open(product_view_link, '_blank');
      };

      var change_payment_status = function(paramID,orderId){
         var selectionID = "pay_status-"+paramID;
         var updateValue = $("#"+selectionID).val();
         console.log(selectionID + " " + updateValue);
         google.script.run.withSuccessHandler(function(e){
           alert("Payment Status of Order ID: "+orderId+" has been updated to " + updateValue);
        }).updatePaymentStatus(orderId,updateValue);
      };
