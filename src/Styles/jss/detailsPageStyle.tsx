import { withStyles, Theme, createStyles, WithStyles } from '@material-ui/core/styles';
import * as mainStyle from './main'

export const detailStyle = (theme: Theme) => 
  createStyles(
    {
      root: {
        display: 'flex',
      },
      content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      cardHeader: {
        background:mainStyle.brownColor[0],
        '& .MuiCardHeader-title': {
          color:mainStyle.yellowColor[0], fontSize:theme.typography.h3
        },
        '& .MuiCardHeader-subheader ':{
          color:'#fff', fontSize:theme.typography.h3
        }
      },
      textSuccess: {
        color:mainStyle.successColor[0],
      },
      textDanger: {
        color:mainStyle.dangerColor[0],
      },
      textBrown: {
        color: mainStyle.brownColor[0]
      },
      bgSuccess: {
        background:mainStyle.successColor[0],
      },
      bgBrown: {
        background:mainStyle.brownColor[0],
      },
      bgDanger: {
        background:mainStyle.dangerColor[0],
      },
      iconWithText : {    verticalAlign: 'text-bottom'},
      CardActions: {
        color: mainStyle.brownColor[1],
        background:mainStyle.grayColor[3],
        textAlign:'center',
        alignItems:'flex-end',
        justifyContent: 'space-between',
        padding:'0',
        paddingLeft:'6px',
        '& .MuiTypography-root':{
          fontSize:'12px',
          margin:'4px 0',
          '& h4':{
            fontSize:'18px',
          } 
        } 
      },
      badgeOrange :{
        background:mainStyle.dangerColor[1],
        padding:'2px',
        borderRadius:'999px',
        color:'#fff'
      },
      bgYellow: {
        background:mainStyle.yellowColor[0],
      },
      container: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom:'10px',
        overflow: 'auto',
        flexDirection: 'column',
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: "red",
      },

    menuContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      '& .MuiGrid-item': {
        padding:'10px 2px',
        textAlign:'center'
      }
    },
    tabRoot: {
      backgroundColor: theme.palette.background.paper,
      '& .MuiPaper-elevation4': {boxShadow:'none'},
      "& .MuiTypography-colorTextSecondary": {
        fontSize: "0.7rem",
        lineHeight:1.2
      },
      "& .MuiTab-textColorPrimary.Mui-selected":{
        background:theme.palette.primary.main,
        color:theme.palette.primary.contrastText
      }
    },
    coupenBox: {
      color:'#fff',
      padding:'10px'
    },
    coupenBox2: {
      padding:'10px',
      color:mainStyle.yellowColor[0]
    }
    }
);