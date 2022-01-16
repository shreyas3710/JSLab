function Submit(){
    var Data=readData();
    createNewinfo(Data);
}

function readData(){
    var Data={};
    Data["Name"]=document.getElementById("name").value;
    Data["Emp_id"]=document.getElementById("empid").value;
    Data["YOJ"]=document.getElementById("yoj").value;
    Data["Salary"]=document.getElementById("salary").value;
    return Data;
}

