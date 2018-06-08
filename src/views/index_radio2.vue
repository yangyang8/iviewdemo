<template>
    <div>
        <Radio-group v-model="phone">
            <Radio value="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio value="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio value="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </Radio-group>
        <br>
        <br>
        <br>
        <RadioGroup v-model="animal">
            <Radio value="金斑蝶">金斑蝶</Radio>
            <Radio value="爪哇犀牛">爪哇犀牛</Radio>
            <Radio value="印度黑羚">印度黑羚</Radio>
        </RadioGroup>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        }
    }
</script>