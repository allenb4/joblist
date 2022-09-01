const row = document.getElementById('jobRow');
const selectJob = document.getElementById('jobs');
const fromPrio = document.getElementById('from');
const toPrio = document.getElementById('to');
const num = 1;
var jobArray = jobData;

function renderJobs() {
        jobArray.sort((a,b) => a.priority - b.priority);
        jobArray.forEach((item, index) => {
            row.innerHTML += `
            <div class="col-sm-3 column">
                <div class="card">
                    <div class="container">
                    <h4><b>${item.jobName}</b></h4> 
                    <p><b>priority: ${item.priority}</b></p> 
                    </div>
                </div>
            </div>`;
            
            selectJob.innerHTML += `<option value="${item.jobName}">${item.jobName}</option>`;
            if (selectJob.value === item.jobName) {
                fromPrio.innerHTML = `from priority: ${item.priority}`;
            }

            toPrio.innerHTML += `<option value="${index+1}">${index+1}</option>`;
        });
}


function getSelectedJob(data) {
    const objData = jobData.find(item => item.jobName === data.value);
    console.log(objData)
    fromPrio.innerHTML = `from priority: ${objData.priority}`;
}

function jobs(data = null) {
    if (data) {
        const newPrio = parseInt(data.value);
        const selectedJob = selectJob.value;
        const objData = jobData.find(item => item.jobName === selectedJob);
        const index = jobData.indexOf(objData);
        jobData[index].priority = newPrio;
        const findCurrentPrio = jobData.find(item => item.priority === newPrio);
        const currentPrioIndex = jobData.indexOf(findCurrentPrio);
        for (i = 0; i <= jobData.length; i ++) {
                if (jobData[i] && jobData[i] !== jobData[index] ) {
                    jobData[i].priority = jobData[i].priority - 1;

                    if (jobData[i].priority >= newPrio) {
                        jobData[i].priority = jobData[i].priority + 1;
                    }

                    if (currentPrioIndex === 0 && jobData[currentPrioIndex].priority <= 1) {
                        jobData[currentPrioIndex].priority = jobData[currentPrioIndex].priority + 1;

                    }
                     
                }
        }

    }

    row.innerText = '';

    console.log(jobData)

    jobData.sort((a,b) => a.priority - b.priority);
    for (x=0; x <= jobData.length - 1 ; x++) {
        jobData[x].priority = x + 1;
    }

    jobData.forEach((item, index) => {
        row.innerHTML += `
        <div class="col-sm-3 column">
            <div class="card">
                <div class="container">
                <h4><b>${item.jobName}</b></h4> 
                <p>priority: ${item.priority}</p> 
                </div>
            </div>
        </div>`;
        
    });

    
}

