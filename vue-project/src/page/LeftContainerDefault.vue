<template>
  <div class="app">
    <Head/>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <!-- <SidebarNav :navItems="nav"></SidebarNav> -->
        <ul class="nav">
            <li class="nav-title">Beacon</li>
            <li class="nav-item nav-dropdown">
              <a class="nav-link nav-dropdown-toggle" href="#">All</a>
              <ul class="nav-dropdown-items">
                <li class="nav-item" >
                  <a class="nav-link" style="margin-left: 20px">type_1</a>
                </li>
                <li class="nav-item" >
                  <a class="nav-link" href="#" style="margin-left: 20px">type_2</a>
                </li>
                <li class="nav-item" >
                  <a class="nav-link" href="#" style="margin-left: 20px">type_3</a>
                </li>
              </ul>
              <a class="nav-link" @click="goToTags()">Tags</a>
              <a class="nav-link" @click="gotoType()">Type</a>
             </li>
          </ul>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <!-- <Breadcrumb :list="nav"/> -->
        <div class="container-fluid center">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DefaultAside/>
      </AppAside>
    </div>
    <DefaultFooter/>
  </div>
</template>

<script>
import { Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, Breadcrumb } from '@coreui/vue'
import Head from './HeaderDefault'
export default {
  name: 'LeftContainerDefault',
  components: {
    AppSidebar,
    AppAside,
    Breadcrumb,
    SidebarForm,
    SidebarFooter,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer,
    Head
  },
  data () {
    return {

    }
  },
  methods: {
    goToTags(){
      console.log("Tags")
      this.$router.push("/tags");
    },
    gotoType(){
      console.log("Type")
      this.$router.push("/type");  
    }
    // name () {
    //   return this.$route.name
    // },
    // list () {
    //   return this.nav.matched.filter((type) => type.name  )
    // }
  }
}
</script>
