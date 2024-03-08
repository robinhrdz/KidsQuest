
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  keyboard:{
    flex: 1,
    backgroundColor: "lightgreen",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

  }, 
  title: {
    fontSize: 40,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    width: "80%",
    marginTop: 15,
    color: "#000",
    borderRadius: 20,    
  },

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  }, 
  optionsaccount: {
    marginTop: 25,
    color: '#007BFF',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
  createAccountText: {
    marginTop: 10,
    color: '#007BFF',
    textDecorationLine: 'underline',
    
  },
  googleButton: {
    flexDirection: 'column', 
    alignItems: 'center', 
    
    
  },
  googleIcon: {
    marginTop: 15, 
    width: 40, 
    height: 40, 
    marginRight: 10, 
    alignItems: "center",
  },
  googleText:{
    fontSize: 17, 
    color: "white", 
    fontWeight: "bold",
  }

});
