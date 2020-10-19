<template>
    <div>
        <button @click="authenticate('github')">auth Github</button>
        <button @click="authenticate('facebook')">auth Facebook</button>
        <button @click="authenticate('google')">auth Google</button>
        <button @click="authenticate('twitter')">auth Twitter</button>
    </div>
</template>