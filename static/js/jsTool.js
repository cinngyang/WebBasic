function makeTable(container, data) {
    var table = $("<table/>").addClass('CSSTableGenerator');
    $.each(data, function (rowIndex, r) {
        var row = $("<tr/>");
        $.each(r, function (colIndex, c) {
            row.append($("<t" + (rowIndex == 0 ? "h" : "d") + "/>").text(c));
        });
        table.append(row);
    });
    return container.append(table);
}

function appendTableColumn(table, rowData) {
    var lastRow = $('<tr/>').appendTo(table.find('tbody:last'));
    $.each(rowData, function (colIndex, c) {
        lastRow.append($('<td/>').text(c));
    });

    return lastRow;
}

function getTableData(table) {
    var data = [];
    table.find('tr').each(function (rowIndex, r) {
        var cols = [];
        $(this).find('th,td').each(function (colIndex, c) {
            cols.push(c.textContent);
        });
        data.push(cols);
    });
    return data;
}

/*
$(document).ready(function () {

    $(document).ready(function() {
        var data = [["City 1", "City 2", "City 3"], //headers
                    ["New York", "LA", "Seattle"], 
                    ["Paris", "Milan", "Rome"], 
                    ["Pittsburg", "Wichita", "Boise"]]
        var cityTable = makeTable($(document.body), data);
    });
    
    var table = makeTable(data);
    appendTableColumn(table, ["Calgary", "Ottawa", "Yellowknife"]);
});
*/

