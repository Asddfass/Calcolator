function Calculate()
{
    var input1 = parseFloat(document.getElementById("input-1").value);
    var input2 = parseFloat(document.getElementById("input-2").value);
    var operations = document.getElementById("operations").value;
    let result;

    let none = true;
    if (isNaN(input1) || isNaN(input2))
    {
        result = "Please input a number Enter a number";
        none = false;
    }

    if (none)
    {
        switch (operations)
        {
        case "add":
            {
                result = input1 + input2;
                break;
            }
        case "sub":
            {
                result = input1 - input2;
                break;
            }
        case "div":
            {
                if (input2 == 0)
                {
                    result = "Error: Division by zero";
                }
                else
                {
                    result = input1 / input2;
                }
                break;
            }
        case "multi":
            {
                result = input1 * input2;
                break;
            }
        default:
            {

            }
        }
    }
    

    
    document.getElementById("result").value = "Result: " + result;
}