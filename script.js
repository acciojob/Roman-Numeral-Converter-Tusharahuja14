function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman='';
	for(let key in obj)
		{
			const[symbol,value]=obj[key];
			while(num>=value)
				{
					roman+=symbol;
					num-=value;
				}
			if(num>0)
			{
				if(value===1000&&num>=900)
				{
					roman+='CM';
					num-=900;
				}
				if(value===500&&num>=400)
				{
					roman+='CD';
					num-=400;
				}
				if(value===100&&num>=90)
				{
					roman+='XC';
					num-=90;
				}
				if(value===50&&num>=40)
				{
					roman+='XL';
					num-=40;
				}
				if(value===10&&num>=9)
				{
					roman += "IX"; 
        num -= 9;
				}
				if(value===5&&num>=4)
					{
						roman+='IV';
						num-=4;
					}
			}
		}
	
return roman;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
