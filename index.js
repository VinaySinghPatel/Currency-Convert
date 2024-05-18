const CountryOneName = document.getElementById("Country1");
const CountrySecondName = document.getElementById("Country2");
const SelectOne = document.getElementById("CountryFrom");
const SelectSecond = document.getElementById("CountryTo");
const AmountOne = document.getElementById("Amoun1");
const AmountSecond = document.getElementById("Amoun2")
const InputAmount = document.getElementById("Inputt");
const ConvertButton = document.getElementById("ConvertButton");


       
InputAmount. addEventListener('keydown', (event) => {
    if (event. key === 'Enter') {
        
    }})

ConvertButton.addEventListener("click",()=>{
    if(InputAmount.value == ""){
        alert("Please Enter Your Amount ");
    }else{
        GetData();
        // const Currency = InputAmount.value;
    } 
})


function DisplayDATA(data) {
    const YourVal = InputAmount.value;
    const CountryOne  = SelectOne.value;
    const CountrySecond = SelectSecond.value;
    // console.log(data); 
   const Value = (data.data[CountryOne]?.value).toFixed(2);
    const Value2 =  ( data.data[CountrySecond]?.value);
   const FinalAmount = Value2*YourVal;
      CountryOneName.innerText = CountryOne;
        CountrySecondName.innerText = CountrySecond;
       AmountOne.innerText = YourVal;
       AmountSecond.innerText = FinalAmount.toFixed(3);

}

async function GetData(){
    const CountryOne  = SelectOne.value;
    const url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_FleQyx6bmIC7toxXr29wwCr7QF8bHM4HlR2XmUbf&base_currency="+CountryOne;
    await fetch(url).then(Response => Response.json()).then(
        data => {
            DisplayDATA(data)
        }).catch(Error => {
            console.log("API Are Not Working Properly",Error);
        })
}

