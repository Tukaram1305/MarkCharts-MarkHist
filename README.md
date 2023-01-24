# MarkCharts-MarkHist
JS classes for easy drawing of graphs and histograms

To use a class object for plotting graphs (or histograms):
Create an HTML/PHP page and include the required file: 
>charts.js, hists.js

Create an HTML CANVAS object with a unique ID to draw on.

Create any HTML object like DIV or SPAN with an ID corresponding to the name of the CANVAS ID of the chart with the '_setCont' affix, for example:
CANVAS ID name where chart will be draw on: 
>chartcan

DIV ID where the configuration menu will be created:
>chartcan_setCont

Create a dataset for the X and Y axes:
(like)
>**var dateY = []**
>**var dateX = []**

To create an instance of a given class, the constructor takes the name of the CANVAS object ID, as:
>**var chartObject = new markCharts("chart1","yes")**
Where ['yes','no'] is the additional custom control panel parameter (require PHP API)

Fill the dataset with data in any way. The 'additionalFunctions.js' file contains an example of how to download a dataset using AJAX, XAMPP software and MariaDB.

Call the 'plot(dataY[], dataX[])' method, specifying data sets as parameters, for the Y axis and then for the X axis:
>**chartObject.plot(dataY,dataX)**

--------------------------------------------------------------------------------
# MarkCharts-MarkHist (PL)
Klasy JS dla łatwego rysowania wykresów i histogramów

Aby skorzystać z obiektu klasy dla rysowania wykresów (lub histogramów), należy:
Utworzyć stronę HTML/PHP i dołączyć wymagany plik: 
>charts.js, hists.js

Utworzyć obiekt HTML CANVAS o unikatowym ID, na którym będzie odbywać się rysowanie.

Utworzyć dowolny obiekt HTML jak DIV czy SPAN o ID odpowiadającym nazwie ID CANVAS wykresu z afixem '_setCont', na przykład:
ID CANVAS gdzie rysowany będzie wykres: 
>chartcan

ID DIV gdzie utworzy się menu konfiguracji:
>chartcan_setCont

Utworzyć dataset dla osi X i Y:
(jak na przykład)
>**var dataY = []**
>**var dataX = []**

Stworzyć instancję danej klasy, konstruktor przyjmuje nazwę ID obiektu CANVAS, jak:
>**var chartObject = new markCharts("chart1","yes")**
Gdzie tagi ['yes','no'] określają czy będzie rysowane dodatkowe menu ustawień (wymaga PHP API)

W dowolny sposób wypełnić dataset danymi. W pliku 'additionalFunctions.js' znajduje się przykład, jak z wykorzystaniem techniki AJAX, oprogramowania XAMPP oraz bazy MariaDB pobrać zestaw danych.

Wywołać metodę 'plot(dataY[], dataX[])', jako parametry podając zestawy danych, kolejno dla osi Y a następnie X:
>**chartObject.plot(dataY,dataX)**
