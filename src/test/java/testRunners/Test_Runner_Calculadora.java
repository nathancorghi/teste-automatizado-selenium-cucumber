package testRunners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

@RunWith(cucumber.api.junit.Cucumber.class)
@CucumberOptions(features="src/test/resources/feature", 
				 glue = "stepDefinition", 
				 plugin = { "pretty", "html:target/cucumber-reports" },
				 monochrome = true)
public class Test_Runner_Calculadora {
	
}
