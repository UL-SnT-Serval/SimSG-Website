<template lang="pug">
    li #[router-link(:to="fullUrl") {{title}}]
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component
    export default class ScenarioList extends Vue {
        @Prop() readonly title!: string;
        @Prop() readonly url!: string;

        get fullUrl(): string {
            return  "/scenario/" + this.url;
        }
    }
</script>