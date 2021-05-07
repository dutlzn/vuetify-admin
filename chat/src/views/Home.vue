<template>
  <v-app :style="{background:$vuetify.theme.themes.dark.backgroud}">
    <v-container class="grow"  fluid>
      <!-- fluid可以尽可能减少左右边距 -->
      <v-row class="fill-height">
        <v-col cols="12" sm="3" class="border">
          <v-app-bar flat color="rgba(0,0,0,0)">
            <v-btn tile color="white" x-large block>
              <v-icon left color="blue">fas fa-plus</v-icon>
              <v-divider class="mx-3" vertical></v-divider>
              新建会话
            </v-btn>
          </v-app-bar>
          <v-app-bar flat color="rgba(0,0,0,0)">
            <v-toolbar-title class="title">聊天</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-app-bar>
          <v-app-bar flat color="rgba(0,0,0,0)">
            <v-text-field
            filled
            label="搜索好友"
            append-icon="mdi-magnify"
            color="grey"
            ></v-text-field>
          </v-app-bar>
          <v-list two-line color="rgba(0,0,0,0)">
            <v-list-item-group v-model="selected" active-class="blue lighten-4" multiple>
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <v-badge bordered bottom color="green" dot offset-x="22" offset-y="26">
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                  </v-badge>
                  <template>
                    <v-list-item-content>
                      <v-list-item-title v-text="item.title"></v-list-item-title>
                      <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>
                <v-divider v-if="index < items.length-1" :key="index"></v-divider>
              </template>
            </v-list-item-group>

          </v-list>
        </v-col>
        <v-col cols="12" sm="6" class="border">
          <v-app-bar flat color="rgba(0,0,0,0)">
            <v-badge bordered bottom color="green" dot offset-x="11" offset-y="13">
              <v-avatar class="mt-n7" size="40" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-avatar>
            </v-badge>
            <v-toolbar-title class="title pl-0 ml-2 mt-n4">Tom1</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title class="title pl-0 ml-2 mt-n4">
              成员 :
            </v-toolbar-title>
            <v-btn color="blue" icon class="mt-n5 mr-n2" outlined max-height="35" max-width="35">
              <v-icon small>fas fa-plus</v-icon>
            </v-btn>
            <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
              <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
            </v-avatar>
            <v-divider vertical inset class="mt-n1"></v-divider>
            <v-btn color="black" icon class="mt-n5">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </v-app-bar>

          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    早上好
                  </div>
                  <v-list-item-subtitle>16分钟前<span class="ml-16">1:03PM 已读</span></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-badge bordered bottom dot color="green" offset-x="16" offset-y="9">
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
              </v-avatar>
            </v-badge>
          </v-app-bar>


          
          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-badge bottom dot color="green" offset-x="16" offset-y="9">
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-avatar>
            </v-badge>
            <v-card class="mt-10 ml-2" max-width="350px" >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    早上好
                  </div>
                  <v-list-item-subtitle>16分钟前<span class="ml-16">1:03PM 已读</span></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-btn color="black" icon class="mb-n10">
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-app-bar>

          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-badge bottom dot color="green" offset-x="16" offset-y="9">
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-avatar>
            </v-badge>
            <v-card class="mt-10 ml-2" max-width="350px" >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    上传了3张照片:<br><br>
                    <v-avatar tile size="60" class="mr-2"><v-img src="2.jpg"></v-img></v-avatar>
                    <v-avatar tile size="60" class="mr-2"><v-img src="3.jpg"></v-img></v-avatar>
                    <v-avatar tile size="60" class="mr-2"><v-img src="4.jpg"></v-img></v-avatar>
                  </div>

                  <v-list-item-subtitle>
                    12分钟前
                  </v-list-item-subtitle>
                </v-list-item-content>
  
              </v-list-item>
            </v-card>
            <v-btn color="black" icon class="mb-n10">
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-app-bar>
         <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    你发的图片真美！
                  </div>
                  <v-list-item-subtitle>16分钟前<span class="ml-16">1:03PM 已读</span></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-badge bordered bottom dot color="green" offset-x="16" offset-y="9">
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
              </v-avatar>
            </v-badge>
          </v-app-bar>
          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="blue" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">
                    你发的图片真美！
                  </div>
                  <v-list-item-subtitle>16分钟前<span class="ml-16">1:03PM 已读</span></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>

            <v-badge bordered bottom dot color="green" offset-x="16" offset-y="9">
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
              </v-avatar>
            </v-badge>
          </v-app-bar>
          
        <v-app-bar color="rgba(0,0,0,0)" flat>
          <v-text-field
          v-model="message"
          append-icon="mdi-emoticon"
          :append-outer-icon="message?'mdi-send':'mdi-microphone'"
          filled
          clear-icon="mdi-close-circle"
          clearable
          label="Message"
          type="text'"
          @click:append-outer="sendMessage"
          @click:clear="clearMessage"
          ></v-text-field>
        </v-app-bar>

        </v-col>

        <v-col cols="12" sm="3" class="border">
          <v-card class="text-center mt-8 mb-3" shaped>
            <v-badge bordered bottom dot color="green" offset-x="11" offset-y="13">
              <v-avatar class="mt-n7" size="60" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
              </v-avatar>
            </v-badge>

            <v-card-title class="layout justify-center">猜猜我是谁</v-card-title>
            <v-card-subtitle class="layout justify-center">老板</v-card-subtitle>
          </v-card>

          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3>信息(9)</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>

              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3>图片(14)</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                
              </v-expansion-panel-content>

            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h3>文件(3)</h3>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-list shaped>
                  <v-list-item-group>
                    <v-list-item v-for="(item, i) in files" :key="i">
                      <v-list-item-icon>
                        <v-icon v-text="item.icon" color="green"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                  </v-list-item-group>
                </v-list>
              </v-expansion-panel-content>

            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  created() {
  },
  data: () => ({
    selected: [2],
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        subtitle: 'test1',
        title: 'Tom1'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        subtitle: 'test1',
        title: 'Tom2'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        subtitle: 'test1',
        title: 'Tom3'
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        subtitle: 'test1',
        title: 'To4'
      }
    ],

    files: [
      {
        text: 'Landing_page.zip',
        icon: 'mdi-cloud-upload'
      },
      {
        text: 'Requirements.pdf',
        icon: 'mdi-cloud-upload'
      },
      {
        text: 'Uwagi.docx',
        icon: 'mdi-cloud-upload'
      }
    ],

    panel: [2],
    show: false,
    message: '请输入消息',
    maker: true,
    iconIndex: 0,
  
  }),

  methods: {
    sendMessage() {

      let _this = this;
      _this.resetIcon();
      _this.clearMessage();
    },

    clearMessage() {
      this.message = ""; 
    },

    resetIcon() {
      this.iconIndex = 0;
    }

  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark?"dark":"light"
    }
  },
}
</script>

<style scoped>
  .border {
    border-right: 1px solid grey;
  }

  .application--wrap {
    min-height: 100vh !important;
  }
</style>


