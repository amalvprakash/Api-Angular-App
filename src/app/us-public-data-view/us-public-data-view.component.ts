import { Component } from '@angular/core';

@Component({
  selector: 'app-us-public-data-view',
  templateUrl: './us-public-data-view.component.html',
  styleUrls: ['./us-public-data-view.component.css']
})
export class UsPublicDataViewComponent {
  data:any ={
    "data":[{"IDNation":"01000US","Nation":"United States","IDYear":2020,"Year":"2020","Population":326569308,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2019,"Year":"2019","Population":324697795,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2018,"Year":"2018","Population":322903030,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2017,"Year":"2017","Population":321004407,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2016,"Year":"2016","Population":318558162,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2015,"Year":"2015","Population":316515021,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2014,"Year":"2014","Population":314107084,"SlugNation":"united-states"},{"IDNation":"01000US","Nation":"United States","IDYear":2013,"Year":"2013","Population":311536594,"SlugNation":"united-states"}],"source":[{"measures":["Population"],"annotations":{"source_name":"Census Bureau","source_description":"The American Community Survey (ACS) is conducted by the US Census and sent to a portion of the population every year.","dataset_name":"ACS 5-year Estimate","dataset_link":"http://www.census.gov/programs-surveys/acs/","table_id":"B01003","topic":"Diversity","subtopic":"Demographics"},"name":"acs_yg_total_population_5","substitutions":[]}]
  }
}
