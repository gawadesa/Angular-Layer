 function person(fname,lname) {
    this.fname = fname;
    this.lname = lname;
    return (this.fname + "" +this.lname)
}
 
module.exports =person;