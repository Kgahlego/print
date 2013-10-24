$("#printBtn").click(function(){
    printcontent($("#content").html());
});
function printcontent(content)
{
    var mywindow = window.open('', '', '');
    mywindow.document.write('<html><title>Print</title><body>');
    mywindow.document.write(content);
    mywindow.document.write('</body></html>');
    mywindow.document.close();
    mywindow.print();
    return true;
}


