var result;
var removeKdigits = function(num, k) {
     // If there are 0 characters to remove from str,  
        // append everything to result   
        result = '';
        recur(num,k,result);
        return (!result || result == 0) ? '0' : result.replace(/^0+/, '');
};

var recur = function(num, k){
        // Find the smallest character among  
        // first (n+1) characters of str.  
        if (k === 0)  
        {  
            result += num;  
            return result;  
        }  
  
        let len = num.length;  
  
        // If there are more characters to  
        // remove than string length,  
        // then append nothing to result  
        if (len <= k)  
            return result;
    
        let minIndex = 0;  
        for (let i = 1; i <= k; i++)  
            if (num[i] < num[minIndex])  
                minIndex = i;  
  
        // Append the smallest character to result  
        result += num[minIndex];  
  
        // substring starting from  
        // minIndex+1 to str.length() - 1.  
        let new_str = num.substr(minIndex + 1);  
  
        // Recur for the above substring  
        // and n equals to n-minIndex  
        recur(new_str, k - minIndex);
}
