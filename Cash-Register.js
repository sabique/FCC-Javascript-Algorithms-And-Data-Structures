let denom = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01}
  ];
  
  function checkCashRegister(price, cash, cid) {
    var change = cash - price;
    let outputArr = {status: "", change: []};
  
    var register = cid.reduce((obj, drawer) => {
      obj.total += drawer[1];
      obj[drawer[0]] = drawer[1];
      return obj; }, { total: 0 });
  
      if(register.total < change) {
        outputArr.status = "INSUFFICIENT_FUNDS";
        
        return outputArr;
      }
  
      if(register.total === change){
        outputArr.status = "CLOSED";
        outputArr.change = [...cid];
  
        return outputArr;
      }
  
      if(register.total > change) {
        outputArr.status = "OPEN";
  
        for(let i = 0; i < denom.length; i++){
          let noteValue = 0;
          let denomObj = denom[i];
  
          while(denomObj.val <= change && register[denomObj.name] > 0){
            change -= denomObj.val;
            register[denomObj.name] -= denomObj.val;
            noteValue += denomObj.val;
            change = Math.round(change * 100) / 100;
          }
  
          if(noteValue > 0){
            outputArr.change.push([denomObj.name, noteValue]);
          }
        }
      }
  
      if(change > 0 && outputArr.status === "OPEN"){
        outputArr.status = "INSUFFICIENT_FUNDS";
        outputArr.change = [];
      }
  
    return outputArr;
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["QUARTER", 0.5]]}.
  
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}.
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "INSUFFICIENT_FUNDS", change: []}.
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]); // {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.