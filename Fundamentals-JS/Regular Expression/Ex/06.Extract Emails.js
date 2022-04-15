function extractEmails(input) {
    let currentEmail = /(^| )[A-Za-z0-9]+[A-Za-z.\-_0-9]*@{1}[A-Za-z._-]+(\.[a-z]+)+/g
    let matchText = input.match(currentEmail);
    for (let line of matchText) {
        if (line !== null) {
            console.log(line);
        }
    }
}
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');
console.log('=================');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
console.log('============');
extractEmails('Please contact us at: support@github.com.');