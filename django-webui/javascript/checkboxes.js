function items_check_all()
{
    var checkall=document.getElementById("itemsall").checked
    var items=document.getElementsByName("items")
    for( i = 0; i < items.length; ++i ) {
        var item = items[i];
        item.checked=checkall;
    }
}

function items_checked_count()
{
    var items=document.getElementsByName("items")
    var j=0;
    for( i = 0; i < items.length; ++i ) {
        var item = items[i];
        if (item.checked) {
            j++;
        }
    }
    return j;
}

function items_checked_values()
{
    var items=document.getElementsByName("items")
    var s="";
    for( i = 0; i < items.length; ++i ) {
        var item = items[i];
        if (item.checked) {
            if (s=="") {
                s=item.value
            } else {
                s=s+" "+item.value;
            }
        }
    }
    return s;
}
