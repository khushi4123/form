function cal()
       {
        var a = document.getElementById("n1").value;
        var b = document.getElementById("n2").value;
        var c = document.getElementById("n3").value;
        var d = document.getElementById("n4").value;
        var e = document.getElementById("n5").value;
        var f = document.getElementById("n6").value;
        var g = document.getElementById("n7").value;
        var h = document.getElementById("n8").value;

        if (a == '' || b == '' || c == '' || d == '' || e == '' || f==' ' || g== ' ' || h==' ') {
            alert("All Feilds are Mendatory");
            return false;
        }
        else if (c.length < 10 || c.length > 10 && c.length==123456789 ) {
            alert("Number should be of 10 digits and 123456789 is not allowed ! Please enter valid number");
            return false;
        }
        else if (isNaN(c)) {
            alert("only numbers are allowed ! Please enter valid number");
            return false;
        }
        else if(d=="password"|| d==a )
        {
                alert("Password cannot be 'password' or 'name' of the user");
                return false;
            }
        else if (d != e) {
            alert("Please enter same Password");
            return false;
        }
        else {
            true;
        }
       }