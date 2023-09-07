const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const reset = document.querySelector('#reset')
const container = document.querySelector('#container')
const log = document.querySelector("#log");

let newValue = 0

add.addEventListener('click', () => {
    const newItem = document.createElement('li')
    newItem.textContent = `item ${newValue}`
    container.append(newItem)
    newValue++
})

remove.addEventListener('click', () => {
    const newItem = document.querySelector('li')
   if (newItem) {
        newItem.parentNode.removeChild(newItem)
   }
})

reset.addEventListener('click', () => {
    document.location.reload()
})

function logChanges(records, observer) {
    for (const record of records) {
        console.log({record})
      for (const addedNode of record.addedNodes) {
        log.textContent = `Added: ${addedNode.textContent}\n${log.textContent}`;
        alert(`Added: ${addedNode.textContent}\n${log.textContent}`)
      }
      for (const removedNode of record.removedNodes) {
        log.textContent = `Removed: ${removedNode.textContent}\n${log.textContent}`;
      }
      if (record.target.childNodes.length === 0) {
        log.textContent = `Disconnected\n${log.textContent}`;
        observer.disconnect();
      }
      console.log(record.target.childNodes.length);
    }
  }
  
  const observerOptions = {
    childList: true,
    subtree: true,
  };
  
  const observer = new MutationObserver(logChanges);
  observer.observe(container, observerOptions);
