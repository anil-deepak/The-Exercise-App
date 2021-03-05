<template>
    <div class="section">
        <div class="container">
            <div class="panel">
                <div class="panel-heading">
                    FriendList
                </div>
                <div class="panel-block" v-for="friend in getFriendsObjects" :key="friend._id">
                    <PersonCard :addFriendVisible="false" :user="friend"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PersonCard from '../components/PersonCard'
import Users from '@/models/Users.js'
export default {
    name: 'FriendList',
    components:{
        PersonCard
    },
    computed:{
        getFriendsObjects:()=>{
            return Users
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>

<style>
</style>