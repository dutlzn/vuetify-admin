<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" color="grey darken-1" size="32">
          <v-img src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2602769531,2866238838&fm=26&gp=0.jpg">
          </v-img>
        </v-avatar>

        <v-btn v-for="link in links" :key="link.name" :to="link.path" text>
          {{ link.name }}
        </v-btn>

        <v-spacer></v-spacer>

      </v-container>
		
    </v-app-bar>

		
		<router-view></router-view>
	


  </v-app>
</template>

<script>
  export default {
    data: () => ({

      links: [
				{
					name: '团队介绍',
					path: 'team'
				},
        {
          name: '教师团队',
          path: 'teachers'
        },
        {
          name: '学术论文',
          path: 'paper'
        },
        {
          name: '学生培养',
          path: 'student'
        }, {
          name: '联系方式',
          path: 'contact'
        }
      ]
    }),
  };
</script>