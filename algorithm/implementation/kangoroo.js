function kangoroo(arr) {
    var postA = arr[0]
    var postB = arr[2]

    var jumpA = arr[1]
    var jumpB = arr[3]

    if (postA < postB) {
        if (jumpA < jumpB) {
            return 'NO';
        } else if (jumpA > jumpB) {
            return "YES";
        } else {
            return 'NO';
        }
    } else if(postB < postA) {
        if (jumpA > jumpB) {
            return 'NO';
        } else if (jumpB > jumpA) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}

module.exports = kangoroo;