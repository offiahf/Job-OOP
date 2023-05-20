const container = document.querySelector('.container')

// JOB POSTING BLUEPRINT
class General{
  constructor(company, jobTittle, location, payRate, hsDiploma, description){
    this.Company = company;
    this.Job_Title =  jobTittle;
    this.Location = location;
    this.Rate = payRate;
    this.Diploma = hsDiploma;
    this.Description = description
  }
  // Abstraction. Not all workers can have the option to work hybrid. ex warehouse, mechanics etc. Mode is not in theconstructor scope
  Mode(){
    return `Hybrid work available for those who live in the ${this.Location} area`
  }
}

// PAYROLL CLERK  (OBJECT 1)
const payrollClerk = new General('Jet Blue', 'Payroll Clerk', 'Dallas TX', '$18', 'High School Diploma or GED', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste sapiente molestias expedita velit labore dolores quia porro soluta dignissimos!')
container.innerHTML += `<h1>${payrollClerk.Company}</h1>`;
container.innerHTML += `<h3>${payrollClerk.Job_Title}</h3>`;
container.innerHTML += `<p>${payrollClerk.Location}</p>`;
container.innerHTML += `<p>${payrollClerk.Rate}<p>`;
container.innerHTML += `<h5>${payrollClerk.Diploma}</h5>`;
container.innerHTML += `<p>${payrollClerk.Description}</p>`;
container.innerHTML += `<h3>${payrollClerk.Mode()}</h3>`;

//SHIPPING CLERK  (OBJECT 2)
const Warehouse = new General('FeDex', 'Shipping', 'Indianapolis IN', '$20', 'High School Diploma or GED', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste sapiente molestias expedita velit labore dolores quia porro soluta dignissimos!')
container.innerHTML += `<h1>${Warehouse.Company}</h1>`;
container.innerHTML += `<h3>${Warehouse.Job_Title}</h3>`;
container.innerHTML += `<p>${Warehouse.Location}</p>`;
container.innerHTML += `<p>${Warehouse.Rate}<p>`;
container.innerHTML += `<h5>${Warehouse.Diploma}</h5>`;
container.innerHTML += `<p>${Warehouse.Description}</p>`;

// CREATING MANAGEMENT CONSTRUCTOR FUNCTION THROUGH INHERITANCE
// AS A MANAGER, WE CAN FIRE SOMEONE etc. MANAGERS NEED BACHELORS DEGREE TOO
class Management extends General{
  constructor(company, jobTittle, location, payRate, hsDiploma, description, Bachelors){
    super(company, jobTittle,location, payRate, hsDiploma, description)
    this.Bachelor = Bachelors
  }
  // CREATING METHODS EXCLUSIVELY TO MANAGERS
  attendTraining(){
    return `A mandatory two weeks training is required once hired`
  }
  onSite(){
   return `This position is on site at our ${this.Location} location`
  }
}

// MANAGER (OBJECT 3)
const QC_MANAGER = new Management ('Extenza', 'Quality Control Manager', 'San Diego, CA', '$60/hr', 'High School Diploma', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste sapiente molestias expedita velit labore dolores quia porro soluta dignissimos', 'Bachelors in Supply chain or Business preferred')
container.innerHTML += `<h1>${QC_MANAGER.Company}</h1>`;
container.innerHTML += `<h3>${QC_MANAGER.Job_Title}</h3>`;
container.innerHTML += `<p>${QC_MANAGER.Location}</p>`;
container.innerHTML += `<p>${QC_MANAGER.Rate}<p>`;
container.innerHTML += `<p>${QC_MANAGER.Description}</p>`;
container.innerHTML += `<h4>${QC_MANAGER.Bachelor}</h4>`;
container.innerHTML += `<h3>${QC_MANAGER.Mode()}</h3>`;
container.innerHTML += `<h3>${QC_MANAGER.attendTraining()}</h3>`;

// MANAGER 4 (OBJECT 4)
const SOFTWARE_LEAD = new Management ('Occus', 'Software Lead', 'Indianapolis, IN', '70/hr', 'High School Diploma', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iste sapiente molestias expedita velit labore dolores quia porro soluta dignissimos', 'Bachelors in Computer Science or Engineering preferred')
container.innerHTML += `<h1>${SOFTWARE_LEAD.Company}</h1>`;
container.innerHTML += `<h3>${SOFTWARE_LEAD.Job_Title}</h3>`;
container.innerHTML += `<p>${SOFTWARE_LEAD.Location}</p>`;
container.innerHTML += `<p>${SOFTWARE_LEAD.Rate}<p>`;
container.innerHTML += `<p>${SOFTWARE_LEAD.Description}</p>`;
container.innerHTML += `<h4>${SOFTWARE_LEAD.Bachelor}</h4>`;
container.innerHTML += `<h3>${SOFTWARE_LEAD.onSite()}</h3>`;

// Since every Job has an company name, salary, etc,  I used a constructor function (classes) and subclasses to create and Inherit the object properties and methods

