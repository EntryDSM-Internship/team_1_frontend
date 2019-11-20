export default function CheckInputValue(input){
    if(input.value === "" || !input.value){
        return 0;
    }
    else{
        return 1;
    }
}