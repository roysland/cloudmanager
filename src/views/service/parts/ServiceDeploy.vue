<template>
    <div>
        <div class="alert red">
            <i><f-icon icon="bell" /></i>
            <div>This feature is not implemented yet</div>
        </div>
        <section class="panel">
            <h2>Build settings</h2>
            <div class="mb-2">
                <label class="form-label">Build command</label>
                <input type="text" class="form-input" />
            </div>
            <div class="mb-2">
            <label class="form-label">Publish directory</label>
            <input type="text" class="form-input" />
            </div>
            <div class="mb-2">
            <label class="form-label">Branch</label>
            <select class="form-input">
                <option>Master</option>
                <option>Dev</option>
            </select>
            </div>

            <button class="btn default">Save build settings</button>
        </section>

    </div>
</template>