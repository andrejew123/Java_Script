function sprawdz()
		{
			var liczba = document.getElementById("pole").value;
			if  (liczba>0) document.getElementById("wynik").innerHTML="dodatnia";
			else if (liczba <0) document.getElementById("wynik").innerHTML="ujemna";
			else if (liczba=="0") document.getElementById("wynik").innerHTML="zero";
			else document.getElementById("wynik").innerHTML="to nie jest liczba. You know nothing john snow";
		}