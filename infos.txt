**Credentials**
mongolab:
account: allplan
user: stissen
database: allplancharts
dbuser: max/mustermann
mongodb://max:mustermann@ds061298.mongolab.com:61298/allplancharts
oauth:
uni2
allplancharts(eu)

**Backup**
mongoexport -h ds061298.mongolab.com:61298 -d allplancharts -c slideshows -u max -p mustermann -o backup/slideshows.json 
mongoexport -h ds061298.mongolab.com:61298 -d allplancharts -c slides -u max -p mustermann -o backup/slides.json 

mongoimport -h ds061298.mongolab.com:61298 -d allplancharts -c slideshows -u max -p mustermann --file backup/slideshows.json
mongoimport -h ds061298.mongolab.com:61298 -d allplancharts -c slides -u max -p mustermann --file backup/slides.json

**Create new Slide**
Http Post /api/slides/ with slideId and name
Extend or create a slideshow
backup db
create slides/nameOfSlide.html
create controller in slideCtrl.js if necessary

**Code for Slides**
Twitter: https://twitter.com/settings/widgets


Facebook: https://developers.facebook.com/docs/plugins/page-plugin