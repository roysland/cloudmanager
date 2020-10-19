<template>
    <div>
        <div class="alert red">
            <i><f-icon icon="bell" /></i>
            <div>This feature is not implemented yet</div>
        </div>
        <h2>Headers</h2>

        <div class="mb-2 flex align-center" style="height: 70px;">
            <div>
                <label class="form-label">Request path</label>
                <input type="text" class="form-input">
            </div>
            <div class="ml-4">
                <label class="form-label">Header name</label>
                <input type="text" class="form-input">
            </div>
            <div class="ml-4">
                <label class="form-label">Header value</label>
                <input type="text" class="form-input">
            </div>
            <div class="ml-4 flex align-center">
                <f-icon icon="x-circle" class="mt-3" />
            </div>
        </div>
        <p class="mt-4"><a>Add header</a></p>
        <button class="btn">Save headers</button> 
    </div>
</template>