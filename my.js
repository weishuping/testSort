//快递排序
var sortArr = [72, 6, 57, 88, 60, 42, 83, 73, 48, 85];

function partion1(a, low, high) {

    var i = low,
        j = high,
        keng = a[i];
    while (i < j) {
        while (i < j && keng <= a[j]) j--;
        if (i < j) {
            a[i] = a[j];
            i++;
        }
        while (i < j && keng >= a[i]) i++;
        if (i < j) {
            a[j] = a[i];
            j--;
        }
    }
    a[i] = keng;
    return i;
}

function quickSort1(arr, low, high) {
    if (low < high) {
        var p = partion1(arr, low, high);
        quickSort1(arr, low, p - 1);
        quickSort1(arr, p + 1, high);
        $('#quickSort1').text(arr);
    }
}


//前后指针法
// function partion2(a, low, high) {
//     var i = low - 1,
//         j = low,
//         key = a[high];
//     for (; j < high; j++) {
//         if (a[j] < key) {
//             i++;
//             var t = a[j];
//             a[j] = a[i];
//             a[i] = t;
//         }
//     }
//     var t = a[i + 1];
//     a[i + 1] = key;
//     key = t;
//     return i + 1;
// }

function quickSort2(arr, low, high) {
    if (low < high) {
        var p = partion2(arr, low, high);
        quickSort2(arr, low, p - 1);
        quickSort2(arr, p + 1, high);
        $('#quickSort2').text(arr);
    }
}
//根据自己理解 前后指针法
function partion2(a, low, high) {
    if(low > high) {
        return;
    }
    var i = low, j= high, t = a[low];
    while(i != j) {
        while(a[j] >= t && i< j) {
            j--
        }
        while(a[i] <= t && i < j) {
            i++
        }
        //当找到比基准大的和基准小的，相互交换。
        if(i < j) {
            var tt = a[i];
            a[i] = a[j];
            a[j] = tt;
        }
    }
    //相遇之后，再把基准和相遇值交换。
    a[low] = a[j];
    a[j] = t;
     return i;
}
function clickButton(type) {
    if (type) {
        quickSort2(sortArr, 0, sortArr.length - 1);
    } else {
        quickSort1(sortArr, 0, sortArr.length - 1);
    }
}
//冒泡排序

function bubbleSort() {
    var len = sortArr.length - 1,
        i, j;
    //这种比较方法 不是相邻两两比较，而是拿外层每趟的值与里层循环值比较；将最小值放到第一个，不可欺。比较偏向选择排序的循环。
    // for (i = 0; i < len; i++) {
    //     for (j = i + 1; j < len; j++) {
    //         if (sortArr[i] > sortArr[j]) {
    //             var t = sortArr[j];
    //             sortArr[j] = sortArr[i];
    //             sortArr[i] = t;
    //         }
    //     }
    //     console.log(sortArr)
    // }
    //这种比较方式，是相邻两两比较，将最大值放到最后一个
    /*for (j = len; j > 0; j--) {
        for (i = 0; i < j; i++) {
            if (sortArr[i] > sortArr[i + 1]) {
                var t = sortArr[i + 1];
                sortArr[i + 1] = sortArr[i];
                sortArr[i] = t;
            }
        }
        console.log(sortArr)
    }*/
    //优化方法，设立标志位，如果没交换就是false
    var flag = true;
    while (flag) {
        flag = false;
        for (j = 1; j < len + 1; j++) {
            if (sortArr[j - 1] > sortArr[j]) { //前面的数字大于后面的数字就交换
                //交换a[j-1]和a[j]
                var temp;
                temp = sortArr[j - 1];
                sortArr[j - 1] = sortArr[j];
                sortArr[j] = temp;

                //表示交换过数据;
                flag = true;
            }
        }
        len--;
        $('#bubbleSort').text(sortArr)
    }
}
//选择排序 记录每次循环中的最小值的索引
function selectionSort() {
    var i, j, len = sortArr.length,
        min_index = 0;
    for (i = 0; i < len; i++) {
        min_index = i;
        for (j = i + 1; j < len; j++) {
            if (sortArr[min_index] > sortArr[j]) {
                min_index = j;
            }
        }
        var t = sortArr[min_index];
        sortArr[min_index] = sortArr[i];
        sortArr[i] = t;
    }
    $('#selectionSort').text(sortArr);
}
//堆排序是选择排序的一种
// 插入排序
function insertSort() {
    var i, j, len = sortArr.length;
    for (i = 1; i < len; i++) {
        for (j = i; j > 0; j--) {
            if (sortArr[j] < sortArr[j - 1]) {
                var t = sortArr[j - 1];
                sortArr[j - 1] = sortArr[j];
                sortArr[j] = t;
            }
        }
    }
    $('#insertSort').text(sortArr);
}
//希尔排序是 插入排序的一种

//堆排序
//根据初始数组去构造初始堆
//二分查找
var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

function binarySearch(low, high, v) {

    var mid = Math.floor((low + high) / 2);
    if (low > high) {
        return false;
    }
    if (v > a[mid]) {
        console.log(mid);
        binarySearch(mid + 1, high, v);
    } else if (v < a[mid]) {
        console.log(mid);
        binarySearch(low, mid - 1, v);
    } else {
        console.log(mid);
        return mid;
    }
}

function aaa() {
    binarySearch(0, 17, 3)
}