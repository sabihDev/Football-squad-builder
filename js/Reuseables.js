export function Hide(htmlObject) {
    htmlObject.classList.add("hidden");
}

export function Show(htmlObject) {
    htmlObject.classList.remove("hidden");
}

export function AddClickListener(button, event) {
    button.addEventListener("click", event);
}

export function ValidateInteger(valueObject) {

    if (Number.isInteger(+valueObject)) {
        // Validation For an integer passed
        console.log(`${valueObject} has passed for validation`);
        return true;
    }
    else {
        // Validation for an integer failded
        console.log(`${valueObject} has failed for validation`);
        console.log(`isInteger: ${Number.isInteger(valueObject)}`);
        console.log(`isFinite: ${Number.isFinite(valueObject)}`);
        return false;
    }
}

export function GetParentInHierarchy(heirarchyLevel, child) {
    let returningObject = child;
    for (let i = 0; i < heirarchyLevel; i++) {
        returningObject = returningObject.parentElement;
    }
    return returningObject;
}