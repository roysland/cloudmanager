<template>
    <div>
        <div class="alert red">
            <i><f-icon icon="bell" /></i>
            <div>This feature is not implemented yet</div>
        </div>
        <h2>Enviroment</h2>
        <p class="text-muted">Environment variables are useful for storing secrets, API keys, and other sensitive data. They are available both in build-time and runtime containers. Access them in your code by using process.env in Node or os.getenv() in Python.</p>

        <div class="mb-2 flex align-center" style="height: 70px;">
            <div>
                <label class="form-label">Key</label>
                <input type="text" class="form-input">
            </div>
            <div class="ml-4">
                <label class="form-label">Value</label>
                <input type="text" class="form-input">
            </div>
            <div class="ml-4 flex align-center">
                <f-icon icon="x-circle" class="mt-3" />
            </div>
        </div>
        <p class="mt-4"><a>Add environment variable</a></p>
        <button class="btn">Save enviroment variables</button> 
    </div>
</template>