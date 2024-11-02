$(document).ready(function () {
    var i = 2;  
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    
    $("#btnDK").click(function(e) {
        e.preventDefault();
        myModal.show();
    });
    
   
    function KiemTraMa() {
        var mauKT = /[0-9]{9}$/;
        var value = $("#ma").val();
        
        if (value == "") {
            $("#tbma").html("Bắt buộc nhập");
            $("#tbma").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else if (!mauKT.test(value)) {
            $("#tbma").html("Nhập sai");
            $("#tbma").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else {
            $("#tbma").html("*");
            $("#tbma").removeClass("mauDo").addClass("mauXanh");
            return true;
        }
    }
    $("#ma").blur(KiemTraMa);

    
    function KiemTraTen() {
        var mauKT = /(^[A-Z]{1}[a-z]+)(\s[A-Z]{1}[a-z]+)*$/;
        var value = $("#ten").val();
        
        if (value == "") {
            $("#tbten").html("Bắt buộc nhập");
            $("#tbten").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else if (!mauKT.test(value)) {
            $("#tbten").html("Chữ cái đầu của mỗi từ phải viết hoa!");
            $("#tbten").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else {
            $("#tbten").html("*");
            $("#tbten").removeClass("mauDo").addClass("mauXanh");
            return true;
        }
    }
    $("#ten").blur(KiemTraTen);

 
    function KiemTraEmail() {
        var mauKT = /^[a-zA-Z0-9._%+-]+@iuh\.edu\.vn$/;
        var value = $("#email").val();
        
        if (value == "") {
            $("#tbemail").html("Bắt buộc nhập");
            $("#tbemail").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else if (!mauKT.test(value)) {
            $("#tbemail").html("Email phải có đuôi @iuh.edu.vn");
            $("#tbemail").addClass("mauDo").removeClass("mauXanh");
            return false;
        }
        else {
            $("#tbemail").html("*");
            $("#tbemail").removeClass("mauDo").addClass("mauXanh");
            return true;
        }
    }
    $("#email").blur(KiemTraEmail);

 
    $("#slGia").change(function() {
        $("#slGia option:selected").each(function() {
            var selectedValue = $(this).val();
            $("#txtDV").val(selectedValue);
            tinhTongTien();
        });
    });

    
    $(".ckDoDung").click(function() {
        var tienDD = 0;
        var n = $(".ckDoDung:checked").length;
        
        if (n == 0) {
            $("#txtDD").val(0);
        } else {
            $(".ckDoDung:checked").each(function() {
                tienDD += parseFloat($(this).val());
            });
            $("#txtDD").val(tienDD);
        }
        tinhTongTien();
    });

    const DO_DUNG = {
        "aoquan": 10000,
        "phao": 5000,
        "kinh": 5000
    };

    
    $(".ckDoDung").click(function() {
        var tongDoDung = 0;
        $('.ckDoDung:checked').each(function() {
            var doDung = $(this).val();  
            tongDoDung += DO_DUNG[doDung] || 0;  
        });
        $("#txtDD").val(tongDoDung);
        tinhTongTien();
    });


    function tinhTongTien() {
        var tienDV = parseFloat($("#txtDV").val()) || 0;
        var tienDD = parseFloat($("#txtDD").val()) || 0;
        $("#txtTong").val(tienDV + tienDD);
    }

   
    function tinhTongTien() {
        var tienDV = parseFloat($("#txtDV").val()) || 0;
        var tienDD = parseFloat($("#txtDD").val()) || 0;
        $("#txtTong").val(tienDV + tienDD);
    }

   
    $("#btnThanhToan").click(function() {
        if(!KiemTraMa() || !KiemTraTen() || !KiemTraEmail()) {
            alert("Vui lòng điền đầy đủ thông tin hợp lệ!");
            return;
        }

        
        var ma = $("#ma").val();
        var ten = $("#ten").val();
        var email = $("#email").val();
        var tienDV = $("#txtDV").val();
        var tienDD = $("#txtDD").val();
        var tongTien = $("#txtTong").val();

    
        var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + ten + 
                  "</td><td>" + email + "</td><td>" + tienDV + "</td><td>" + 
                  tienDD + "</td><td>" + tongTien + "</td></tr>";
        $("table tbody").append(them);
        resetForm();
        myModal.hide();
    });
function resetForm(){
    $("#ma, #ten, #email").val('');
    $("#slGia").prop('selectedIndex', 0);
    $("#txtDV, #txtDD, #txtTong").val('0');
    $(".ckDoDung").prop('checked',false);
    $("#tbma, #tbten, #tbemail").html("*").removeClass("mauDo mauXanh");
}
$("#btnHuy").click(function(){
    resetForm();
    myModal.hide();
});
   
});