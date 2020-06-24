import { Component, OnInit } from "@angular/core";
import { DateTime } from 'luxon';
import Chart from 'chart.js';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment'

@Component({
  selector: "app-user",
  templateUrl: "user.component.html",
  styleUrls: ['user.component.scss']
})

export class UserComponent implements OnInit {
  test: Date = new Date();
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  public barCount = 60;
  public initialDateStr = '01 Apr 201 00:00 Z';
  public  ItemsArray=[];
  public  ItemsArrayDate=[];
  CompanyPrice : number;
  CompanyPriceDif : number;
  CompanyPriceDifPecentage : number;

  
  constructor(public httpClient: HttpClient) {
    var now = moment(); // add this 2 of 4


    //console.log('hello world', now.format()); // add this 3 of 4
    //console.log(now.add(7, 'days').format()); // add this 4of 4

  }

    getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };
  
 randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  randomBar(date, lastClose) {
    var open = this.randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
    var close = this.randomNumber(open * 0.95, open * 1.05).toFixed(2);
    var high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1).toFixed(2);
    var low = this.randomNumber(Math.min(open, close) * 0.9, Math.min(open, close)).toFixed(2);
    return {
      t: date.valueOf(),
      o: open,
      h: high,
      l: low,
      c: close
    };
  
  }
  
  getRandomData(dateStr, count) {
    var date = DateTime.fromRFC2822(dateStr);
    var data = [this.randomBar(date, 30)];
    while (data.length < count) {
      date = date.plus({days: 1});
      if (date.weekday <= 5) {
        data.push(this.randomBar(date, data[data.length - 1].c));
      }
    }
    return data;
  }

   removeDuplicates(originalArray, prop) {
    var newArray = [];
     var lookupObject  = {};

     for(var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
     }

     for(i in lookupObject) {
         newArray.push(lookupObject[i]);
     }
      return newArray;
}

  

  ngOnInit() {
    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas = document.getElementById("chartLineGreen_me");
    this.ctx = this.canvas.getContext("2d");


    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ["May-20","Apr-20","May-20","Jun-20","Jul-20","Aug-20","Sep-20","Oct-20","Nov-20","Dec-20","Jan-21","Feb-21","Mar-21","Apr-21","May-21"],
    
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 1,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 10,
        pointHoverRadius: 2,
        pointHoverBorderWidth: 7,
        pointRadius: 2,
        data: [6732700, 
          12040300,
          12603900, 
          7365700,
          12261300,
          8050900, 
          4025000,
          10482577, 
          6121600,
          8538700,
          10438000, 
          10696500, 
          15207828, 
           10499392, 
           6534154]
      }],
    };

    var myChart = new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });


    this.httpClient.get("https://ctrade.co.zw/mobileapi/GetCompaniesandPricesEXCHANGE?exchange=zse").subscribe((res: string )=>{
      try {
        var prices = JSON.parse(JSON.stringify(res))
       } catch(e) {
         console.log(e)
       }
     
       prices.forEach(element => {
       // console.log(element.WebCompanyValue)
        if(element.WebCompanyName.includes("Delta Corporation Limited(DLTA.ZW)")){
          //console.log(element.WebCompanyValue)
          var res = element.WebCompanyValue.split(",");
          //this.CompanyPrice = parseFloat(element.WebCompanyValue.split(",")[1]);
        }
        
       });
       


    });

    this.httpClient.get('https://ctrade.co.zw/ctrade/online.ctrade_php/getPrices.php?company=DLTA.ZW').subscribe((res: string )=>{
    
      try {
       var quates = JSON.parse(JSON.stringify(res))
      } catch(e) {
        console.log(e)
      }

      //this.ItemsArray= {res};
      
    var values =[]
    var labels = []
    var closingMonth =[];
    var arrayTest=[];
   var  closingMonthValue =[];
   var closingMonthLabale= []

     var arryQuates= quates[0].values;
     var arryQuatesTest= quates[0].values;

     this.CompanyPrice = parseFloat(arryQuates[arryQuates.length-1][1]);


     this.CompanyPriceDif = (parseFloat(arryQuates[arryQuates.length-1][1])-parseFloat(arryQuates[arryQuates.length-2][1]));
     

    
     console.log((this.CompanyPrice-this.CompanyPriceDif));
     this.CompanyPriceDifPecentage =  ((this.CompanyPrice-this.CompanyPriceDif)/this.CompanyPrice) * 100

      

     
     arryQuatesTest.forEach(element => {
      arrayTest.push(element);
      //console.log(arryQuatesTest.filter(vendor => vendor[0] ===element[0]  ))
         /* if(arryQuatesTest.includes(element)){
          console.log("false element")
          //console.log(element)
         }else{
          console.log("true element")
          //console.log(element)
         } */

     });

     
     
     arryQuates.forEach(element => {
      //console.log(element)
      let a = []
      
     

      values.push(element[1])
      var date = new Date(element[0]);
      var mydate = moment(element[0]);
      
      var change = ((parseFloat(element) - (values[values.length - 1])) / parseFloat(element)) * 100 
       //console.log(change)

      this.ItemsArray.push({date:mydate.format("DD/MM/YYYY"), value:element[1] , change : parseFloat(change.toFixed(2))})
      this.ItemsArrayDate.push({date:mydate.format("DD/MM/YYYY"), value:element[1] , change : parseFloat(change.toFixed(2))})
      
      
      labels.push(mydate.format("DD/MM/YYYY"))
      //console.log(mydate.format('MM YYYY'))
     
       closingMonth.push({date:mydate.format("MMMM YYYY"), value:element[1]})
     


     
      
       
     });

     var finalDate = this.removeDuplicates(closingMonth,"date")
     //console.log(finalDate)
   
     finalDate.forEach(element=>{

      
       
         closingMonthValue.push(element.date)
         closingMonthLabale.push(element.value)
    
      
     });
    

      console.log(closingMonthValue);

      this.canvas = document.getElementById("chartLineGreenLine");
      this.ctx = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
      gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
      gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
  
      var data = {
        labels: labels
        ,
        /* datasets: [{
          label: 'CHRT - Chart.js Corporation',
          data: this.getRandomData(this.initialDateStr, this.barCount)
        }] */
        datasets: [{
          label: "Closing Price",
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#00d6b4',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#00d6b4',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#00d6b4',
          pointBorderWidth: 1,
          pointHoverRadius: 2,
          pointHoverBorderWidth: 1,
          pointRadius: 0,
          //data: values,
          data: values,
        }]
      };
  
  
      var gradientChart: any = {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        elements: {
  
          line: {
  
              tension: 0
  
          },
  
          point: {
  
              radius: 0
  
          }
  
      },
      tooltips: {
          backgroundColor: '#f5f5f5',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [{
            barPercentage: 1.6,
            gridLines: {
              zeroLineWidth: 1,
              drawBorder: false,
              color: 'rgba(29,140,248,0.0)',
              zeroLineColor: "transparent",
            },
            ticks: {
              suggestedMin: 50,
            
              //suggestedMax: 125,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }],
  
          xAxes: [{
           
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(0,242,195,0.1)',
              zeroLineColor: "transparent",
            },
            ticks: {
              stepSize:100,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }]
        }
      };
  
      var myChart = new Chart(this.ctx, {
        type: 'line',
        data: data,
        options: gradientChart
  
      });
























      var chart_labels = ['2019 JUN', '2019 JUL', ' 2019 AUG', '2019 SEP', '2019 OCT', ' 2019 NOV', '2019 DEC',' 2020 JAN', '2020 FEB', ' 2020 MAR', '2020 APR', '2020 MAY'];
      this.datasets = [
        [3.4012, 3.4777, 3.0939, 4.0206, 3.7412, 3.5993, 3.4006, 5.0624, 6.5704, 6.2547, 5.8500, 12.01],
        [3.4012, 3.4777, 3.0939, 4.0206, 3.7412, 3.5993, 3.4006, 5.0624, 6.5704, 6.2547, 5.8500, 12.01],
        [3.4012, 3.4777, 3.0939, 4.0206, 3.7412, 3.5993, 3.4006, 5.0624, 6.5704, 6.2547, 5.8500, 12.01]
      ];
      this.data = this.datasets[0];
      
  
  
  
      this.canvas = document.getElementById("chartBig_me");
      this.ctx = this.canvas.getContext("2d");
  
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
      gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
  
      var config = {
        type: 'line',
        data: {
          labels: chart_labels,
          datasets: [{
            label: "Monthly Clossing Price",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: '#ec250d',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: '#ec250d',
            pointBorderColor: 'rgba(255,255,255,0)',
            pointHoverBackgroundColor: '#ec250d',
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.datasets[0],
          }]
        },
        options: gradientChart
      };
      this.myChartData = new Chart(this.ctx, config);






























     });



    



    


    this.canvas = document.getElementById("CountryChart");
    this.ctx  = this.canvas.getContext("2d");
    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors


    var myChart = new Chart(this.ctx, {
      type: 'bar',
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
        datasets: [{
          label: "Countries",
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          data: [53, 20, 10, 80, 100, 45],
        }]
      },
      options: gradientBarChartConfiguration
    });

  }
  
  







}
