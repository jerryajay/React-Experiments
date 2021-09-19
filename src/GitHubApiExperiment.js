import { Component } from "react";
import Chart from "react-apexcharts";



class GitHubApiExperiment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            gists: null,
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'radar',
                },
                title: {
                    text: 'Basic Bar Chart'
                },
                xaxis: {
                    categories: ['January', 'February', 'March', 'April', 'May', 'June']
                }
            },
        };

    }

    componentDidMount() {

        fetch('https://api.github.com/gists')
            .then(res => res.json())
            .then(gists => {
                this.setState({ gists });
            })
    }

    render() {
        const { gists } = this.state

        const { options } = this.state.options
        const { series } = this.state.series

        var options2 = {
            chart: {
                type: 'line'
            },
            series: [{
                name: 'sales',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
            }],
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        }



        return (
            <>
                <div className="app">
                    <div className="row">
                        <div className="mixed-chart">
                            <Chart
                                options={this.state.options}
                                series={this.state.series}
                                type="bar"
                                width="500"
                            />
                        </div>
                    </div>
                </div>

                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {gists ? (
                        gists.map(gist => (
                            <div class="col">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-text">{gist.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <li>Loading...</li>
                    )
                    }
                </div>
            </>
        );
    }
}

export default GitHubApiExperiment;

