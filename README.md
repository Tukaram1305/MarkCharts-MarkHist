# MarkCharts-MarkHist
Klasy JS dla łatwego rysowania wykresów i histogramów

Aby skorzystać z obiektu klasy dla rysowania wykresów (lub histogramów), należy:
Utworzyć stronę HTML/PHP i dołączyć wymagany plik: charts.js, hists.js

Utworzyć obiekt HTML CANVAS o unikatowym ID

Utworzyć dataset dla osi X i Y:
(jak na przykład)
  var dataY = []
  var dataX = []

Stworzyć instancję danej klasy, konstruktor przyjmuje nazwę ID obiektu CANVAS, jak:
var chartObject = new markCharts("chart1")

W dowolny sposób wypełnić dataset danymi. W pliku 'additionalFunctions.js' znajduje się przykład, jak z wykorzystaniem techniki AJAX, oprogramowania XAMPP oraz bazy MariaDB pobrać zestaw danych.

Wywołać metodę 'plot(dataY[], dataX[])', jako parametry podając zestawy danych, kolejno dla osi Y a następnie X:
  chartObject.plot(dataY,dataX)
